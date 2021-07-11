import './validation.js';
import './address.js';
import './checkin.js';
import './price.js';
import './guest.js';

import { setActiveMode } from '../utils/active-mode.js';
import { resetForms } from '../utils/clear.js';
import { showMessage } from '../utils/message.js';

const offerForm = document.querySelector('.ad-form');
const offerFormFields = offerForm.querySelectorAll('fieldset');

const activateOfferForm = () => setActiveMode(offerForm, offerFormFields, 'ad-form--disabled');

const isSuccessSendingForm = () => {
  showMessage('#success', '.success');
  resetForms();
};

export {
  offerForm,
  offerFormFields,
  isSuccessSendingForm,
  activateOfferForm
};
