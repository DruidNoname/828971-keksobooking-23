import {showAlert} from '../utils/utils.js';
import {
  createInitialMarkers,
  mapLoading
} from '../map/map.js';
import { activateForms } from '../modes/active-mode.js';
import {
  initFilters
} from '../map/filter.js';

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

const getAddsAndActivateFilters = (rentalAds) => {
  const fullAdsAssortiment = rentalAds.slice();
  createInitialMarkers(fullAdsAssortiment);
  initFilters(fullAdsAssortiment);
};

const getAdsFromServer = () => {
  getData((rentalAds) => getAddsAndActivateFilters(rentalAds),(message) => showAlert(message));
};

mapLoading()
  .then(getAdsFromServer)
  .then(activateForms)
  .catch(showAlert);

export {
  getAdsFromServer,
  sendData
};

