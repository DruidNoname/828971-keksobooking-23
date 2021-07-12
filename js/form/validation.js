import {
  capacity,
  roomsNumber,
  equalizeGuestsToRooms
} from './guest.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const offerTitleInput = document.querySelector('#title');
const offerPriceInput = document.querySelector('#price');
const offerSendButton = document.querySelector('.ad-form__submit');

const getCurrentOption = (select) => select.options[select.selectedIndex];

offerTitleInput.addEventListener('input', () => {
  const titleLength = offerTitleInput.value.length;

  if (!titleLength) {
    offerTitleInput.setCustomValidity('Название помещения обязательно для заполнения');
  } else if (titleLength < MIN_TITLE_LENGTH) {
    offerTitleInput.setCustomValidity('Название помещения должно содержать не менее 30 символов');
  } else if (titleLength > MAX_TITLE_LENGTH) {
    offerTitleInput.setCustomValidity('Название помещения должно содержать не более 100 символов');
  } else {
    return offerTitleInput.setCustomValidity('');
  }

  offerTitleInput.reportValidity();
});

offerPriceInput.addEventListener('input', () => {
  const priceValue = +offerPriceInput.value;
  const priceMin = +offerPriceInput.getAttribute('min');

  if (!priceValue) {
    offerPriceInput.setCustomValidity('Цена помещения обязательна для заполнения');
  } else if (+priceValue < +priceMin) {
    offerPriceInput.setCustomValidity(`Цена не может быть меньше ${priceMin}`);
  } else if (+priceValue > MAX_PRICE) {
    offerPriceInput.setCustomValidity('Цена не может быть больше 1 000 000');
  } else {
    return offerPriceInput.setCustomValidity('');
  }
  offerPriceInput.reportValidity();
});

offerSendButton.addEventListener('click', () => {
  equalizeGuestsToRooms(roomsNumber, capacity);
  const capacityCurrentOption = getCurrentOption(capacity);

  if (capacityCurrentOption.hasAttribute('disabled')) {
    return capacity.setCustomValidity('Количество гостей не соответствует заявленному количеству комнат');
  }

  roomsNumber.setCustomValidity('');
  capacity.setCustomValidity('');
});
