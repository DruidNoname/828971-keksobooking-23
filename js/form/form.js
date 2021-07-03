import '../server/server.js';
import './validation/validation.js';
import './tools/address.js';
import './tools/checkin.js';
import './tools/price.js';
import './tools/guest.js';
import { resetForm } from './clear/clear.js';
import { sendData } from '../server/server.js';
import { showMessage } from '../utils/utils.js';

const offerForm = document.querySelector('.ad-form');

const isSuccessSendingForm = (form) => {
  showMessage('#success', '.success');
  resetForm(form);
};

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => isSuccessSendingForm(evt.target),
    () => showMessage('#error', '.error'),
    new FormData(evt.target),
  );
});
