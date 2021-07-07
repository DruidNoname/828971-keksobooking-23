import {
  setActiveMode
} from '../utils/utils.js';

const offerForm = document.querySelector('.ad-form');
const offerFormFields = offerForm.querySelectorAll('fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormFields = filtersForm.querySelectorAll('fieldset');

const makeActive = () => {
  setActiveMode(offerForm, offerFormFields, 'ad-form--disabled');
  setActiveMode(filtersForm, filtersFormFields, 'map__filters--disabled');
};

export { makeActive };
