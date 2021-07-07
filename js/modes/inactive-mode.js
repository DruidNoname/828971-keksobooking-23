import {
  setInactiveMode
} from '../utils/utils.js';

const offerForm = document.querySelector('.ad-form');
const offerFormFields = offerForm.querySelectorAll('fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormFields = filtersForm.querySelectorAll('fieldset');


setInactiveMode(offerForm, offerFormFields, 'ad-form--disabled');

setInactiveMode(filtersForm, filtersFormFields, 'map__filters--disabled');
