import '../server/server.js';
import './validation.js';
import './address.js';
import './checkin.js';
import './price.js';
import './guest.js';
import { clearFormsAndMarkers } from './clear.js';
import { sendData } from '../server/server.js';
import { showMessage } from '../utils/utils.js';

const offerForm = document.querySelector('.ad-form');
const offerFormFields = offerForm.querySelectorAll('fieldset');

const isSuccessSendingForm = () => {
  showMessage('#success', '.success');
  clearFormsAndMarkers();
};

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => isSuccessSendingForm(),
    () => showMessage('#error', '.error'),
    new FormData(evt.target),
  );
});

export {
  offerForm,
  offerFormFields
}
