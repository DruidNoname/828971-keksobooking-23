const typeField = document.getElementById('type');
const priceField = document.getElementById('price');
const MINIMAL_PRICE_FOR_RESIDENCE = [
  {
    type: 'bungalow',
    minPrice: 0,
  },
  {
    type: 'flat',
    minPrice: 1000,
  },
  {
    type: 'hotel',
    minPrice: 3000,
  },
  {
    type: 'house',
    minPrice: 5000,
  },
  {
    type: 'palace',
    minPrice: 10000,
  },
];

function setPricePlaceholder() {
  const currentResidenceType = typeField.options[typeField.selectedIndex].value;
  const neededResidencePrice = MINIMAL_PRICE_FOR_RESIDENCE.find(  (value) => value.type === currentResidenceType);

  priceField.min = neededResidencePrice.minPrice;
  priceField.placeholder = neededResidencePrice.minPrice;
}


typeField.addEventListener('change', () => {
  setPricePlaceholder();
});

priceField.addEventListener('focus', () => {
  setPricePlaceholder();
});

document.querySelector('.ad-form__reset').addEventListener('click', () => {
  priceField.removeAttribute('min');
  priceField.placeholder = 5000;
});
