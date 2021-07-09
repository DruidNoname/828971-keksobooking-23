import {
  setInactiveMode,
  filtersForm,
  filtersFormFields,
  offerForm,
  offerFormFields
} from '../utils/utils.js';

setInactiveMode(offerForm, offerFormFields, 'ad-form--disabled');

setInactiveMode(filtersForm, filtersFormFields, 'map__filters--disabled');
