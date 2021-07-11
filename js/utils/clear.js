import { filtersForm } from '../map/filter.js';
import { offerForm } from '../form/form.js';
import { setInitialCoords } from '../form/address.js';
import { setInitialMarkerPosition } from '../map/map.js';
import {
  priceField,
  setInitialPriceAttrs
} from '../form/price.js';

import {
  roomsNumber,
  capacity
} from '../form/guest.js';

function resetDisabledAttr(field) {
  for (const item of field.options) {
    item.removeAttribute('disabled');
  }
}

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
