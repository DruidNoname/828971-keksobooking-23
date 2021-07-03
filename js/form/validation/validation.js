import {capacity, equalizeGuestsToRooms, roomsNumber} from '../tools/guest.js';

const offerTitleInput = document.querySelector('#title');
const offerPriceInput = document.querySelector('#price');
const offerSendButton = document.querySelector('.ad-form__submit');
let roomsCurrentOption = roomsNumber.options[roomsNumber.selectedIndex];
let capacityCurrentOption = capacity.options[capacity.selectedIndex];

offerTitleInput.addEventListener('invalid', () => {
  if (offerTitleInput.validity.valueMissing) {
    offerTitleInput.setCustomValidity('Название помещения обязательно для заполнения');
  } else if (offerTitleInput.validity.tooShort) {
    offerTitleInput.setCustomValidity('Название помещения должно состоять минимум из 30 символов');
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

capacity.addEventListener('invalid', () => {
  if (capacityCurrentOption.hasAttribute('disabled')) {
    capacity.setCustomValidity('Количество гостей не соответствует заявленному количеству комнат');
  } else {
    capacity.setCustomValidity('');
  }
});

roomsNumber.addEventListener('change', () => {
  roomsCurrentOption = roomsNumber.options[roomsNumber.selectedIndex];
});

capacity.addEventListener('change', () => {
  capacityCurrentOption = capacity.options[capacity.selectedIndex];

  capacity.setCustomValidity('');
});

offerSendButton.addEventListener('click', () => {
  equalizeGuestsToRooms(roomsNumber, capacity);

  if (roomsCurrentOption.hasAttribute('disabled')) {
    roomsNumber.setCustomValidity('Количество комнат не соответствует заявленному количеству гостей');
    return;
  }

  if (capacityCurrentOption.hasAttribute('disabled')) {
    capacity.setCustomValidity('Количество гостей не соответствует заявленному количеству комнат');
    return;
  }
  return true;
});
