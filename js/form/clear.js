import { setInitialPriceAttrs, priceField } from './price.js';
import { setInitialCoords } from './address.js';
import {
  roomsNumber,
  capacity
} from './guest.js';
import { resetDisabledAttr } from '../utils/utils.js';


import {
  setInitialMarkerPosition,
  createAdMarkers,
} from '../map/map.js';

const resetForm = (upperForm, lowerForm) => {
  upperForm.reset();
  lowerForm.reset();
  setInitialPriceAttrs(priceField);
  setInitialMarkerPosition();
  resetDisabledAttr(roomsNumber);
  resetDisabledAttr(capacity);
  setInitialCoords();
  createAdMarkers();
};

document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  const upperForm = document.querySelector('.ad-form');
  const lowerForm = document.querySelector('.map__filters');
  resetForm(upperForm, lowerForm);
});

export { resetForm };
