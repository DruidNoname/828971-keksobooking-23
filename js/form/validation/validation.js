const offerTitleInput = document.querySelector('#title');
const offerPriceInput = document.querySelector('#price');
//const offerForm = document.querySelector('.ad-form');

offerTitleInput.addEventListener('invalid', () => {
  if (offerTitleInput.validity.valueMissing) {
    offerTitleInput.setCustomValidity('Название помещения обязательно для заполнения');
  } else if (offerTitleInput.validity.tooShort) {
    offerTitleInput.setCustomValidity('Название помещения должно состоять минимум из 30 символов');
  } else {
    offerTitleInput.setCustomValidity('');
  }
});

offerTitleInput.addEventListener('invalid', () => {
  if (offerPriceInput.validity.valueMissing) {
    offerPriceInput.setCustomValidity('Цена помещения обязательна для заполнения');
  } else if (offerPriceInput.validity.rangeOverflow) {
    offerPriceInput.setCustomValidity('Цена не может быть больше 1 000 000');
  } else {
    offerPriceInput.setCustomValidity('');
  }
});


