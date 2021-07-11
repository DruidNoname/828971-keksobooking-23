const ResidenceTypesWithNames = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const popupBalloonTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const existsAndFilled = (dataItem) => dataItem && dataItem.length !== 0;

const getContainer = (template, selector) => template.querySelector(selector);

const fillContainer = (offerDataItem, container, fillingFunction) => {
  if (existsAndFilled(offerDataItem)) {
    fillingFunction();
  } else {
    container.remove();
  }
};

const setTypeOfQuarters = (offerData, template) => {
  for (const key in ResidenceTypesWithNames) {
    if (key === offerData.offer.type) {
      template.querySelector('.popup__type').textContent = ResidenceTypesWithNames[key];
    }
  }
};

const setTitle = (offerData, template) => {
  const titleTemplate = getContainer(template, '.popup__title');
  const titleData = offerData.offer.title;

  fillContainer(titleData, titleTemplate, () => titleTemplate.textContent = titleData);
};

const setAddress = (offerData, template) => {
  const addressTemplate = getContainer(template, '.popup__text--address');
  const addressData = offerData.offer.address;

  fillContainer(addressData, addressTemplate, () => addressTemplate.textContent = addressData);
};

const setPrice = (offerData, template) => {
  const priceTemplate = getContainer(template, '.popup__text--price');
  const priceData = offerData.offer.price;

  fillContainer(priceData, priceTemplate, () => priceTemplate.textContent = priceData);
};

const setCapacity = (offerData, template) => {
  const capacityTemplate = getContainer(template, '.popup__text--capacity');
  const capacityData = offerData.offer.guests;
  const roomsData = offerData.offer.rooms;

  if (existsAndFilled(roomsData)) {
    fillContainer(capacityData, capacityTemplate, () => capacityTemplate.textContent = `${roomsData} комнат для ${capacityData} гостей`);
  } else {
    capacityTemplate.remove();
  }
};

const setCheckin = (offerData, template) => {
  const timeTemplate = getContainer(template, '.popup__text--time');
  const checkinData = offerData.offer.checkin;
  const checkoutData = offerData.offer.checkout;

  if (existsAndFilled(checkoutData)) {
    fillContainer(checkinData, timeTemplate, () => `Заезд после ${checkinData}, выезд до ${checkoutData}`);
  } else {
    timeTemplate.remove();
  }
};

const setFeatures = (offerData, template) => {
  const featuresTemplate = template.querySelector('.popup__features');
  const featuresData = offerData.offer.features;

  fillContainer(featuresData, featuresTemplate, () => featuresTemplate.textContent = offerData.offer.features.join(', '));
};

const setDescription = (offerData, template) => {
  const descriptionTemplate = template.querySelector('.popup__description');
  const descriptionData = offerData.offer.description;

  fillContainer(descriptionData, descriptionTemplate, () => descriptionTemplate.textContent = offerData.offer.description);
};

const setPhotos = (offerData, template) => {
  const popupPhotoBlock = template.querySelector('.popup__photos');
  const photoTemplate = popupPhotoBlock.querySelector('.popup__photo');
  const photosData = offerData.offer.photos;

  fillContainer(
    photosData,
    photoTemplate,
    () => {
      if (existsAndFilled(photosData)) {

        photosData.forEach((photoLink) => {
          const popupPhoto = photoTemplate.cloneNode(true);
          popupPhoto.setAttribute('src', photoLink);
          popupPhotoBlock.appendChild(popupPhoto);
        });

        popupPhotoBlock.removeChild(photoTemplate);
      } else {
        popupPhotoBlock.remove();
      }
    },
  );
};

const setAvatar = (offerData, template) => {
  const avatarTemplate = template.querySelector('.popup__avatar');

  if (existsAndFilled(offerData.author.avatar)) {
    avatarTemplate.setAttribute('src', offerData.author.avatar);
  } else {
    avatarTemplate.remove();
  }
};

function drawBalloon(offerData) {
  const popupBalloon = popupBalloonTemplate.cloneNode(true);

  setTitle(offerData, popupBalloon);
  setAddress(offerData, popupBalloon);
  setPrice(offerData, popupBalloon);
  setCapacity(offerData, popupBalloon);
  setCheckin(offerData, popupBalloon);
  setTypeOfQuarters(offerData, popupBalloon);
  setFeatures(offerData, popupBalloon);
  setDescription(offerData, popupBalloon);
  setPhotos(offerData, popupBalloon);
  setAvatar(offerData, popupBalloon);

  return popupBalloon;
}

export { drawBalloon };
