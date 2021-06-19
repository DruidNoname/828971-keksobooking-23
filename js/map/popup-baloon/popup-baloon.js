import { createRandomOffers } from '../../data/data.js';
const QUARTERS_TYPES_WITH_NAMES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const popupBalloonTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const map = document.querySelector('#map-canvas');
const balloons = createRandomOffers(3);

function setTypeOfQuarters(offerData, template) {
  for (const key in QUARTERS_TYPES_WITH_NAMES) {
    if (key === offerData.offer.type) {
      template.querySelector('.popup__type').textContent = QUARTERS_TYPES_WITH_NAMES[key]; //required by considerations
    }
  }
}

function setFeatures(offerData, template) {
  const featuresTemplate = template.querySelector('.popup__features');
  if (offerData.offer.features !== undefined && offerData.offer.features.length !== 0) {
    featuresTemplate.textContent = offerData.offer.features.join(', '); //not marked as required
  } else {
    featuresTemplate.remove();
  }
}

function setDescription(offerData, template) {
  const descriptionTemplate = template.querySelector('.popup__description');
  if (offerData.offer.description !== undefined && offerData.offer.description.length !== 0) {
    descriptionTemplate.textContent = offerData.offer.description; //not marked as required
  } else {
    descriptionTemplate.remove();
  }
}

function setPhotos(offerData, template) {
  const popupPhotoBlock = template.querySelector('.popup__photos');
  const photoTemplate = popupPhotoBlock.querySelector('.popup__photo');
  if (offerData.offer.photos !== undefined && offerData.offer.photos.length !== 0) {
    offerData.offer.photos.forEach((photoLink) => {
      const popupPhoto = photoTemplate.cloneNode(true);
      popupPhoto.setAttribute('src', photoLink);
      popupPhotoBlock.appendChild(popupPhoto); //not marked as required
    });
    popupPhotoBlock.removeChild(photoTemplate);
  } else {
    popupPhotoBlock.remove();
  }
}

function setAvatar(offerData, template) {
  const avatarTemplate = template.querySelector('.popup__avatar');
  if (offerData.author.avatar !== undefined && offerData.author.avatar.length !== 0) {
    avatarTemplate.setAttribute('src', offerData.author.avatar); //not marked as required
  } else {
    avatarTemplate.remove();
  }
}

function drawBalloons() {
  balloons.forEach((offerData) => {
    const popupBalloon = popupBalloonTemplate.cloneNode(true);
    popupBalloon.querySelector('.popup__title').textContent = offerData.offer.title; //required
    popupBalloon.querySelector('.popup__text--address').textContent = offerData.offer.address; //required, after loading
    popupBalloon.querySelector('.popup__text--price').textContent = offerData.offer.price; //required
    popupBalloon.querySelector('.popup__text--capacity').textContent = `${offerData.offer.rooms} комнат для ${offerData.offer.guests} гостей`; //required by considerations
    popupBalloon.querySelector('.popup__text--time').textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`; //required by considerations
    setTypeOfQuarters(offerData, popupBalloon);
    setFeatures(offerData, popupBalloon);
    setDescription(offerData, popupBalloon);
    setPhotos(offerData, popupBalloon);
    setAvatar(offerData, popupBalloon);
    map.appendChild(popupBalloon);
  });
}

drawBalloons();
