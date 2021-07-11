import { showAlert } from '../utils/show-alert.js';
import { showMessage } from '../utils/message.js';
import {
  createInitialMarkers,
  mapLoading
} from '../map/map.js';
import {
  initFilters,
  activateFiltersForm
} from '../map/filter.js';
import {
  activateOfferForm,
  isSuccessSendingForm,
  offerForm
} from '../form/form.js';


const sendData = (onSuccess, onFail, formData) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data' +
    ' ')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error('Ошибка загрузки похожих объявлений');
    })
    .then((response) => response.json())
    .then((rentalAds) => {
      onSuccess(rentalAds);
    })
    .catch((error = 'Ошибка загрузки похожих объявлений') => {
      onFail(error);
    });
};

const getAddsAndActivateFilters = (rentalAds) => {
  const fullAdsAssortiment = rentalAds.slice();

  createInitialMarkers(fullAdsAssortiment);
  activateFiltersForm();
  initFilters(fullAdsAssortiment);
};

const getAdsFromServer = () => {
  getData(
    (rentalAds) => getAddsAndActivateFilters(rentalAds),
    (message) => showAlert(message));
};

mapLoading()
  .then(activateOfferForm)
  .then(getAdsFromServer)
  .catch((error = 'Ошибка загрузки похожих объявлений') => showAlert(error));

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => isSuccessSendingForm(),
    () => showMessage('#error', '.error'),
    new FormData(evt.target),
  );
});
