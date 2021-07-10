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
  setInitialMarkerPosition
} from '../map/map.js';

const resetForms = () => {
  filtersForm.reset();
  offerForm.reset();
  setInitialPriceAttrs(priceField);
  setInitialMarkerPosition();
  resetDisabledAttr(roomsNumber);
  resetDisabledAttr(capacity);
  setInitialCoords();
};

document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForms();
});

export {
  resetForms
};
