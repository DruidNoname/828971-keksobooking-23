const ALERT_PERIOD = 8000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.position = 'fixed';
  alertContainer.style.minHeight = 60;
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_PERIOD);
};

function setInactiveMode(form, formFields, disabledClassName) {
  form.classList.add(disabledClassName);

  for (const formField of formFields) {
    formField.setAttribute('disabled', true);
  }
}

function setActiveMode(form, formFields, disabledClassName) {
  form.classList.remove(disabledClassName);

  for (const formField of formFields) {
    formField.removeAttribute('disabled');
  }
}

const isEscEvent = (evt) =>  evt.key === 'Escape' || evt.key === 'Esc';

const addClosingMessageByClick = (messageContainer) => {
  messageContainer.addEventListener('click', (evt) => {
    evt.target.remove();
  });
};

const addClosingMessageByEsc = (messageContainer) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      messageContainer.remove();
    }
  });
};

const addClosingMessageByButton = (button) => {
  button.addEventListener('click', (evt) => {
    evt.target.closest('div').remove();
  });
};

const addClosingMessage = (removingElement) => {
  const button = removingElement.querySelector('.error__button');

  if (button) {
    addClosingMessageByButton(button);
  }

  addClosingMessageByEsc(removingElement);
  addClosingMessageByClick(removingElement);
};

const showMessage = (outerContainer, innerContainer) => {
  const messageTemplate = document.querySelector(outerContainer)
    .content
    .querySelector(innerContainer);
  const newSign = messageTemplate.cloneNode(true);

  addClosingMessage(newSign);

  document.querySelector('body').appendChild(newSign);
};

const getCurrentOption = (select) => {
  return select.options[select.selectedIndex];
};

export {
  showMessage,
  showAlert,
  setInactiveMode,
  setActiveMode,
  getCurrentOption
};
