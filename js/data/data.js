import { getRandomPositiveInteger, getRandomPositiveFloat } from '../utils/utils.js';

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN = ['12:00', '13:00', '14:00'];
const CHECK_OUT = CHECK_IN;
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const avatarLinks = new Array(10)
  .fill(null)
  .map((value, index) => `img/avatars/user0${index + 1}.png`);

function getRandomElementFromArray(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

function createRandomArrayFromArray(array) {
  const shuffledArray = () => {
    let j, temp;
    const arrayLength = array.length;

    for (let i = arrayLength - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  };
  const newArrayLength = getRandomPositiveInteger(1, array.length - 1);
  return shuffledArray().slice(0, newArrayLength);
}

function getPlaceCoords() {
  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  return [lat, lng];
}

const createRentalAd = (value, index) => {
  const placeCoords = getPlaceCoords();
  return {
    author: {
      avatar: avatarLinks[index],
    },
    offer: {
      title: 'Сдаётся помещение',
      address: placeCoords.join(', '),
      price: getRandomPositiveInteger(1000, 100500),
      type: getRandomElementFromArray(TYPE),
      rooms: getRandomPositiveInteger(1, 100),
      guests: getRandomPositiveInteger(1, 3),
      checkin: getRandomElementFromArray(CHECK_IN),
      checkout: getRandomElementFromArray(CHECK_OUT),
      features: createRandomArrayFromArray(FEATURES),
      description: 'Если вы ПО КОРИДОРУ мчитесь на велосипеде, ' +
        'а навстречу вам ИЗ ВАННОЙ вышел папа погулять - не сворачивайте В КУХНЮ! ' +
        'В КУХНЕ - твердый холодильник!!!',
      photos: createRandomArrayFromArray(PHOTOS),
      location: {
        lat: placeCoords[0],
        lng: placeCoords[1],
      },
    },
  };
};

export const createRandomOffers = function(quantity) {
  return new Array(quantity)
    .fill(null)
    .map(createRentalAd);
};
