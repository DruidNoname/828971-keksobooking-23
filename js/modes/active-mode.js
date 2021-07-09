import {
  setActiveMode,
  filtersForm,
  filtersFormFields,
  offerForm,
  offerFormFields
} from '../utils/utils.js';

const activateForms = () => {
  setActiveMode(offerForm, offerFormFields, 'ad-form--disabled');
  setActiveMode(filtersForm, filtersFormFields, 'map__filters--disabled');
};

export { activateForms };
