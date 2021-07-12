const INITIAL_FILE = 'img/muffin-grey.svg';

const avatarFileInput = document.querySelector('#avatar');
const residenceFileInput = document.querySelector('#images');
const avatarPictureField = document.querySelector('.ad-form-header__preview img');
const residencePictureField = document.querySelector('.ad-form__photo');

const fileReader = new FileReader();

const clearAvatar = () => { avatarPictureField.setAttribute('src', INITIAL_FILE); };

const clearResidencePic = (field) => {
  field.textContent = '';
};

const useFileReadersData = (cb) => {
  fileReader.addEventListener('load', cb, {once: true});
};

const setAvatarCB = (field, link) => { field.setAttribute('src', link); };

const setResidencePictureCB = (field, link) => {
  clearResidencePic(field);
  const residencePic = document.createElement('img');

  residencePic.setAttribute('src', link);
  residencePic.style.display = 'block';
  residencePic.style.margin = '0 auto';
  residencePic.style.maxWidth = '100%';
  residencePic.style.maxHeight = '100%';

  field.appendChild(residencePic);
};

avatarFileInput.addEventListener('change', () => {
  const selectedFile = avatarFileInput.files[0];

  if (selectedFile) {
    useFileReadersData( () => { setAvatarCB(avatarPictureField, fileReader.result); });

    fileReader.readAsDataURL(selectedFile);
  }
});

residenceFileInput.addEventListener('change', () => {
  const selectedFile = residenceFileInput.files[0];
  if (selectedFile) {
    useFileReadersData(() => { setResidencePictureCB(residencePictureField, fileReader.result); });

    fileReader.readAsDataURL(selectedFile);
  }
  // clearResidencePic();
});

export {
  residencePictureField,
  clearAvatar,
  clearResidencePic
};
