import { createRandomOffers } from '../../data/data.js';
const QUARTERS_TYPES_WITH_NAMES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel : 'Отель',
};
const popupBalloonTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const balloons = createRandomOffers(3);

balloons.forEach((offerData) => {
  const map = document.querySelector('#map-canvas');
  const popupBalloon = popupBalloonTemplate.cloneNode(true);
  const popupPhotoBlock = popupBalloon.querySelector('.popup__photos');//я вывела его в переменную потому что он повторяется много раз

  if (offerData.offer.title !== undefined && offerData.offer.title.length !== 0) {
    popupBalloon.querySelector('.popup__title').textContent = offerData.offer.title;
  } else {
    popupBalloon.querySelector('.popup__title').remove();
  }

  if (offerData.offer.address !== undefined && offerData.offer.address.length !== 0) {
    popupBalloon.querySelector('.popup__text--address').textContent = offerData.offer.address;
  } else {
    popupBalloon.querySelector('.popup__text--address').remove();
  }

  if (offerData.offer.price !== undefined && offerData.offer.price.length !== 0) {
    popupBalloon.querySelector('.popup__text--price').textContent = offerData.offer.price;
  } else {
    popupBalloon.querySelector('.popup__text--price').remove();
  }

  if (offerData.offer.type !== undefined && offerData.offer.type.length !== 0) {
    for (const key in QUARTERS_TYPES_WITH_NAMES) {
      if (key === offerData.offer.type) {
        popupBalloon.querySelector('.popup__type').textContent = QUARTERS_TYPES_WITH_NAMES[key];
      }
    }

  } else {
    popupBalloon.querySelector('.popup__type').remove();
  }

  if (offerData.offer.rooms !== undefined && offerData.offer.guests !== undefined  && offerData.offer.rooms.length !== 0 && offerData.offer.guests.length !== 0) {
    popupBalloon.querySelector('.popup__text--capacity').textContent = `${offerData.offer.rooms} комнат для ${offerData.offer.guests} гостей`;
  } else {
    popupBalloon.querySelector('.popup__text--capacity').remove();
  }

  if (offerData.offer.checkin !== undefined && offerData.offer.checkout !== undefined && offerData.offer.checkin.length !== 0 && offerData.offer.checkout.length !== 0) {
    popupBalloon.querySelector('.popup__text--time').textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;
  } else {
    popupBalloon.querySelector('.popup__text--time').remove();
  }

  if (offerData.offer.features !== undefined && offerData.offer.features.length !== 0) {
    popupBalloon.querySelector('.popup__features').textContent = offerData.offer.features.join(', ');
  } else {
    popupBalloon.querySelector('.popup__features').remove();
  }

  if (offerData.offer.description !== undefined && offerData.offer.description.length !== 0) {
    popupBalloon.querySelector('.popup__description').textContent = offerData.offer.description;
  } else {
    popupBalloon.querySelector('.popup__description').remove();
  }

  if (offerData.offer.photos !== undefined && offerData.offer.photos.length !== 0) {
    offerData.offer.photos.forEach((photoLink) => {
      const popupPhoto = popupBalloon
        .querySelector('.popup__photo')
        .cloneNode(true);
      popupPhoto.setAttribute('src', photoLink);
      popupPhotoBlock.appendChild(popupPhoto);
    });//здесь несколько фотографий
    popupPhotoBlock.removeChild(popupPhotoBlock.querySelector('.popup__photo'));
  } else {
    popupPhotoBlock.remove();
  }

  if (offerData.author.avatar !== undefined && offerData.author.avatar.length !== 0) {
    popupBalloon.querySelector('.popup__avatar').setAttribute('src', offerData.author.avatar);
  } else {
    popupBalloon.querySelector('.popup__avatar').remove();
  }

  map.appendChild(popupBalloon);
});
