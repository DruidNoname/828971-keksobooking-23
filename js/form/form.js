import '../server/server.js';
import './validation.js';
import './address.js';
import './checkin.js';
import './price.js';
import './guest.js';
import { resetForm } from './clear.js';
import { sendData } from '../server/server.js';
import { showMessage } from '../utils/utils.js';

const offerForm = document.querySelector('.ad-form');
const lowerForm = document.querySelector('.map__filters');

const isSuccessSendingForm = (upperForm, lowerForm) => {
  showMessage('#success', '.success');
  resetForm(upperForm, lowerForm);
};

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => isSuccessSendingForm(evt.target, lowerForm),
    () => showMessage('#error', '.error'),
    new FormData(evt.target),
  );
});
