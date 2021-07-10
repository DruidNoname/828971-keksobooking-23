import '../server/server.js';
import './validation.js';
import './address.js';
import './checkin.js';
import './price.js';
import './guest.js';
import './message-on-submit.js';

import { resetForms } from './clear.js';
import { sendData } from '../server/server.js';
import { showMessage } from './message-on-submit.js';
import { offerForm } from '../utils/utils.js';

const isSuccessSendingForm = () => {
  showMessage('#success', '.success');
  resetForms();
};

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => isSuccessSendingForm(),
    () => showMessage('#error', '.error'),
    new FormData(evt.target),
  );
});
