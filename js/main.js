const avatarLinks = [];
let placeCoords = [];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN = ['12:00', '13:00', '14:00'];
const CHECK_OUT = CHECK_IN;
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

(() => {
  for (let i = 1; i < 10; i++) {
    avatarLinks.push(`img/avatars/user0${i}.png`);
  }
  avatarLinks.push('img/avatars/user10.png');
})();


function generateRandomIntegerNumberFromInterval(minValue, maxValue) {
  const rangeOfNumbers = maxValue - minValue;
  const integerRangeOfNumbers = Math.floor(maxValue) - Math.ceil(minValue);
  const randomNumberOnInterval = Math.random() * (integerRangeOfNumbers + 1) + Math.ceil(minValue);
  if (typeof minValue !== 'number' || typeof maxValue !== 'number') {
    return 'Аргументы функции должны быть числами';
  }
  if (rangeOfNumbers <= 0) {
    return 'Некорректный интервал';
  }
  if (integerRangeOfNumbers < 0) {
    return 'В указанном интервале отсутствуют целые числа';
  }
  if (minValue < 0) {
    return 'На границах интервала не могут быть отрицательные числа';
  }
  return Math.floor(randomNumberOnInterval);
}

function generateRandomDecimalNumberFromInterval(minValue, maxValue, decimalPlaces) {
  const rangeOfNumbers = maxValue - minValue;
  const multiplyerForValueCutting = Math.pow(10, decimalPlaces);
  const maxValueScaled = Math.floor(maxValue * multiplyerForValueCutting) / multiplyerForValueCutting;
  const minValueScaled = Math.ceil(minValue * multiplyerForValueCutting) / multiplyerForValueCutting;
  const decimalRangeOfNumbers = maxValueScaled - minValueScaled;
  const randomNumberOnInterval = Math.random() * (decimalRangeOfNumbers + (1 / multiplyerForValueCutting)) + minValueScaled;
  if (typeof minValue !== 'number' || typeof maxValue !== 'number' || typeof decimalPlaces !== 'number') {
    return 'Аргументы функции должны быть числами';
  }
  if (rangeOfNumbers <= 0) {
    return 'Некорректный интервал';
  }
  if (minValue < 0) {
    return 'На границах интервала не могут быть отрицательные числа';
  }
  if (!Number.isInteger(decimalPlaces)) {
    return 'Количество знаков после запятой не может быть дробным числом';
  }
  if (decimalPlaces < 0) {
    return 'Количество знаков после запятой не может быть отрицательным числом';
  }
  if (decimalRangeOfNumbers < 0) {
    return 'В указанном интервале отсутствуют числа с заданным количеством знаков после запятой';
  }
  return Math.floor(randomNumberOnInterval * multiplyerForValueCutting) / multiplyerForValueCutting;
}

function generateRandomIndexForArray(array) {
  return array[generateRandomIntegerNumberFromInterval(0, array.length - 1)];
}

function createRandomArrayFromArray(array) {
  const shuffledArray = () => {
    let j, temp;
    for (let i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  };
  const newArrayLength = generateRandomIntegerNumberFromInterval(1, array.length - 1);
  return shuffledArray().slice(0, newArrayLength);
}

function getPlaceCoords() {
  placeCoords = [];
  placeCoords.push(generateRandomDecimalNumberFromInterval(35.65000, 35.70000, 5));
  placeCoords.push(generateRandomDecimalNumberFromInterval(139.70000, 139.80000, 5));
  return placeCoords;
}

const createRentalAd = (value, index) => {
  getPlaceCoords();
  return {
    author: {
      avatar: avatarLinks[index],
    },
    offer: {
      title: 'Сдаётся помещение',
      address: placeCoords.join(', '),
      price: generateRandomIntegerNumberFromInterval(1000, 100500),
      type: generateRandomIndexForArray(TYPE),
      rooms: generateRandomIntegerNumberFromInterval(1, 300),
      guests: generateRandomIntegerNumberFromInterval(1, 300),
      checkin: generateRandomIndexForArray(CHECK_IN),
      checkout: generateRandomIndexForArray(CHECK_OUT),
      features: createRandomArrayFromArray(FEATURES),
      description: 'Если вы ПО КОРИДОРУ мчитесь на велосипеде, а навстречу вам ИЗ ВАННОЙ вышел папа погулять - не сворачивайте В КУХНЮ! В КУХНЕ - твердый холодильник!!!',
      photos: createRandomArrayFromArray(PHOTOS),
      location: {
        lat: placeCoords[0],
        lng: placeCoords[1],
      },
    },
  };
};

const createRandomOffers = new Array(10).fill(null).map((value, index) => createRentalAd(value, index));
