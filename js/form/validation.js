import {
  capacity,
  roomsNumber,
  equalizeGuestsToRooms
} from './guest.js';

const offerTitleInput = document.querySelector('#title');
const offerPriceInput = document.querySelector('#price');
const offerSendButton = document.querySelector('.ad-form__submit');

const getCurrentOption = (select) => select.options[select.selectedIndex];

offerTitleInput.addEventListener('invalid', () => {
  if (offerTitleInput.validity.valueMissing) {
    return offerTitleInput.setCustomValidity('Название помещения обязательно для заполнения');
  }

  if (offerTitleInput.validity.tooShort) {
    return offerTitleInput.setCustomValidity('Название помещения должно содержать не менее 30 символов');
  }

  if (offerTitleInput.validity.tooLong) {
    return offerTitleInput.setCustomValidity('Название помещения должно содержать не более 100 символов');
  }

  offerTitleInput.setCustomValidity('');
});

offerPriceInput.addEventListener('invalid', () => {
  if (offerPriceInput.validity.valueMissing) {
    return offerPriceInput.setCustomValidity('Цена помещения обязательна для заполнения');
  }

  if (offerPriceInput.validity.rangeOverflow) {
    return offerPriceInput.setCustomValidity('Цена не может быть больше 1 000 000');
  }

  offerPriceInput.setCustomValidity('');
});

offerSendButton.addEventListener('click', () => {
  equalizeGuestsToRooms(roomsNumber, capacity);
  const roomsCurrentOption = getCurrentOption(roomsNumber);
  const capacityCurrentOption = getCurrentOption(capacity);

  if (roomsCurrentOption.hasAttribute('disabled')) {
    return roomsNumber.setCustomValidity('Количество комнат не соответствует заявленному количеству гостей');
  }

  if (capacityCurrentOption.hasAttribute('disabled')) {
    return capacity.setCustomValidity('Количество гостей не соответствует заявленному количеству комнат');
  }

  roomsNumber.setCustomValidity('');
  capacity.setCustomValidity('');
});
