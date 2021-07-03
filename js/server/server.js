const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error('Наташа, мы всё уронили');
    })
    .then((response) => response.json())
    .then((rentalAds) => {
      onSuccess(rentalAds);
    })
    .catch((error = 'Мы уронили вообще всё, Наташ') => {
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
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {
  getData,
  sendData
};

