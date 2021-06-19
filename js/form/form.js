import '../utils/utils.js';
import '../server/server.js';
import './validation/validation.js';
import './tools/address.js';
import './tools/checkin.js';
import './tools/price.js';
import './tools/guest.js';

const offerForm = document.querySelector('.ad-form');
const offerFormFields = offerForm.querySelectorAll('fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormFields = filtersForm.querySelectorAll('fieldset');

function setInactiveModeToForm(form, formFields, disabledClassName) {
  form.classList.add(disabledClassName);
  for (const formField of formFields) {
    formField.setAttribute('disabled', 'disabled');
  }
}

function setActiveModeToForm(form, formFields, disabledClassName) {
  form.classList.remove(disabledClassName);
  for (const formField of formFields) {
    formField.removeAttribute('disabled');
  }
}

function setInactiveMode() {
  setInactiveModeToForm(offerForm, offerFormFields, 'ad-form--disabled');
  setInactiveModeToForm(filtersForm, filtersFormFields, 'map__filters--disabled');
}

function setActiveMode() {
  setActiveModeToForm(offerForm, offerFormFields, 'ad-form--disabled');
  setActiveModeToForm(filtersForm, filtersFormFields, 'map__filters--disabled');
}

setInactiveMode();
setActiveMode();
