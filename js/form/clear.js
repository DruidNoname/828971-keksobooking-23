import { setInitialPriceAttrs, priceField } from './price.js';
import { setInitialCoords } from './address.js';
import {
  resetDisabledAttr,
  roomsNumber,
  capacity
} from './guest.js';

import { setInitialMarkerPosition } from '../map/map.js';

const resetForm = (form) => {
  form.reset();
  setInitialPriceAttrs(priceField);
  setInitialMarkerPosition();
  resetDisabledAttr(roomsNumber);
  resetDisabledAttr(capacity);
  setInitialCoords();
};

document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  const form = evt.target.closest('form');
  resetForm(form);
});

export { resetForm };
