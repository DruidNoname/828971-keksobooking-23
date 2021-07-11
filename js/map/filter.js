import { setActiveMode } from '../utils/active-mode.js';
import { debounce } from '../utils/debounce.js';
import {
  createAdMarkers,
  clearAdMarkers,
  createInitialMarkers
} from '../map/map.js';

const NUMBER_OF_MARKERS = 10;
const CREATING_DELAY = 500;

const filtersForm = document.querySelector('.map__filters');
const filtersFormFields = filtersForm.children;
const residenceType = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const roomQuantity = document.querySelector('#housing-rooms');
const capacity = document.querySelector('#housing-guests');

const activateFiltersForm =  () => setActiveMode(filtersForm, filtersFormFields, 'map__filters--disabled');

const getAdaptatedPriceValue = (currentPrice) => {
  if (0 < currentPrice && currentPrice < 10000) {
    return 'low';
  }

  if (9999 < currentPrice && currentPrice < 50000) {
    return 'middle';
  }

  if (49999 < currentPrice) {
    return 'high';
  }
};

const getAdRank = (ad) => {
  const currentResidenceType = residenceType.options[residenceType.selectedIndex].value;
  const currentPrice = price.options[price.selectedIndex].value;
  const currentRoomQuantity = roomQuantity.options[roomQuantity.selectedIndex].value;
  const currentCapacity = capacity.options[capacity.selectedIndex].value;
  const selectedBoxes = document.querySelectorAll('#housing-features input:checked');
  const selectedFeatures = Array.from(selectedBoxes).map((box) => box.value);

  let rank = 0;

  if (ad.offer.type === currentResidenceType) {
    rank += 1;
  }

  if (getAdaptatedPriceValue(ad.offer.price) === currentPrice) {
    rank += 1;
  }

  if (ad.offer.rooms === +currentRoomQuantity) {
    rank += 1;
  }

  if (ad.offer.guests === +currentCapacity) {
    rank += 1;
  }

  for (const selectedFeature of selectedFeatures) {
    if (ad.offer.features && ad.offer.features.some( (value) => value === selectedFeature)) {
      rank += 1;
    }
  }

  ad.rank = rank;

  return rank;
};

const compareAds = (AddA, AddB) => {
  const rankA = getAdRank(AddA);
  const rankB = getAdRank(AddB);

  return rankB - rankA;
};

const getActiveFilterQuantity = () => {
  const filters = document.querySelectorAll('.map__filter');
  let counter = 0;

  for (const filter of filters) {
    if (filter.value !== 'any') {
      counter++;
    }
  }

  return counter + (document.querySelectorAll('#housing-features input:checked')).length;
};

const sortingAds = (ads) => {
  const sortedAds = ads
    .slice()
    .sort(compareAds);
  const activeFiltersQuantity = getActiveFilterQuantity();

  if (activeFiltersQuantity > 0) {
    const firstWrongElemIndex = sortedAds.findIndex((value) => value.rank < activeFiltersQuantity);

    if (firstWrongElemIndex < NUMBER_OF_MARKERS) {
      return sortedAds.slice(0, firstWrongElemIndex);
    }
  }

  return sortedAds.slice(0, NUMBER_OF_MARKERS);
};

const initFilters = (ads) => {
  document.querySelector('.map__filters').addEventListener('change', debounce( () => {
    clearAdMarkers();
    createAdMarkers(sortingAds(ads));
  }), CREATING_DELAY);

  document.querySelector('.map__filters').addEventListener('reset', () => {
    clearAdMarkers();
    createInitialMarkers(ads);
  });
};

export {
  filtersForm,
  filtersFormFields,
  initFilters,
  activateFiltersForm
};
