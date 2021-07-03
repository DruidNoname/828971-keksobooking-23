import { resetPriceAttrs, priceField } from '../tools/price.js';
import { setCustomCoords } from '../tools/address.js';
import { resetMapAndMarkerPosition } from '../../map/map.js';

const resetForm = (form) => {
  form.reset();
  resetPriceAttrs(priceField);
  resetMapAndMarkerPosition();
  setCustomCoords();
};

document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  const form = evt.target.closest('form');
  resetForm(form);
});

export { resetForm };
