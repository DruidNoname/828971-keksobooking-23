import {capacity, equalizeGuestsToRooms, roomsNumber} from './guest.js';
import { getCurrentOption } from '../utils/utils.js';

const offerTitleInput = document.querySelector('#title');
const offerPriceInput = document.querySelector('#price');
const offerSendButton = document.querySelector('.ad-form__submit');

offerTitleInput.addEventListener('invalid', () => {
  if (offerTitleInput.validity.valueMissing) {
    offerTitleInput.setCustomValidity('Название помещения обязательно для заполнения');
  } else if (offerTitleInput.validity.tooShort) {
    offerTitleInput.setCustomValidity('Название помещения должно содержать не менее 30 символов');
  } else if (offerTitleInput.validity.tooLong) {
    offerTitleInput.setCustomValidity('Название помещения должно содержать не более 100 символов');
  } else {
    offerTitleInput.setCustomValidity('');
  }
});

offerPriceInput.addEventListener('invalid', () => {
  if (offerPriceInput.validity.valueMissing) {
    offerPriceInput.setCustomValidity('Цена помещения обязательна для заполнения');
  } else if (offerPriceInput.validity.rangeOverflow) {
    offerPriceInput.setCustomValidity('Цена не может быть больше 1 000 000');
  } else {
    offerPriceInput.setCustomValidity('');
  }
});

offerSendButton.addEventListener('click', () => {
  equalizeGuestsToRooms(roomsNumber, capacity);
  const roomsCurrentOption = getCurrentOption(roomsNumber);
  const capacityCurrentOption = getCurrentOption(capacity);

  if (roomsCurrentOption.hasAttribute('disabled')) {
    roomsNumber.setCustomValidity('Количество комнат не соответствует заявленному количеству гостей');
    return;
  }

  if (capacityCurrentOption.hasAttribute('disabled')) {
    capacity.setCustomValidity('Количество гостей не соответствует заявленному количеству комнат');
    return;
  }

  roomsNumber.setCustomValidity('');
  capacity.setCustomValidity('');
});
