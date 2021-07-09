import { setInitialPriceAttrs, priceField } from './price.js';
import { setInitialCoords } from './address.js';
import {
  roomsNumber,
  capacity
} from './guest.js';
import {
  resetDisabledAttr,
  filtersForm,
  offerForm
} from '../utils/utils.js';


import {
  setInitialMarkerPosition,
  createAdMarkers
} from '../map/map.js';

const resetForms = (upperForm, lowerForm) => {
  upperForm.reset();
  lowerForm.reset();
  setInitialPriceAttrs(priceField);
  setInitialMarkerPosition();
  resetDisabledAttr(roomsNumber);
  resetDisabledAttr(capacity);
  setInitialCoords();
  createAdMarkers();
};

const clearFormsAndMarkers = () => resetForms(filtersForm, offerForm);

document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();

  clearFormsAndMarkers();
});

export { clearFormsAndMarkers };
