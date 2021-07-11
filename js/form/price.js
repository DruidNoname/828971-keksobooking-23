const PRICE_PLACEHOLDER = 5000;
const pricesForRezidences = [
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

const typeField = document.getElementById('type');
const priceField = document.getElementById('price');


function getMinimalPrice() {
  const currentResidenceType = typeField.options[typeField.selectedIndex].value;
  const neededResidencePrice = pricesForRezidences.find((value) => value.type === currentResidenceType);

  return neededResidencePrice.minPrice;
}

function setPricePlaceholder(field) {
  const minimalPrice = getMinimalPrice();

  field.min = minimalPrice;
  field.placeholder = minimalPrice;
}

function setInitialPriceAttrs(field) {
  field.removeAttribute('min');
  field.placeholder = PRICE_PLACEHOLDER;
}

typeField.addEventListener('change', () => {
  setPricePlaceholder(priceField);
});

priceField.addEventListener('focus', () => {
  setPricePlaceholder(priceField);
});

export {
  priceField,
  setInitialPriceAttrs
};
