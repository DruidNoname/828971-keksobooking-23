const ALERT_PERIOD = 8000;

const offerForm = document.querySelector('.ad-form');
const offerFormFields = offerForm.querySelectorAll('fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormFields = filtersForm.children;

function showAlert(message) {
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
}

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

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function listenOnEscape(evt, messageContainer) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    messageContainer.remove();
  }
}

function addClosingMessageByEsc(cb) {
  document.addEventListener('keydown', cb, {once: true});
}

function removeClosingMessageListener(cb) {
  document.removeEventListener('keydown', cb, {once: true});
}

function closeMessage(messageContainer, cb) {
  removeClosingMessageListener(cb);
  messageContainer.remove();
}

function addClosingMessageByClick(messageContainer, cb) {
  messageContainer.addEventListener('click', () => {
    closeMessage(messageContainer, cb);
  });
}

function addClosingMessageByButton(button, messageContainer, cb) {
  messageContainer.addEventListener('click', () => {
    closeMessage(messageContainer, cb);
  });
}

function addClosingMessage(removingElement) {
  const button = removingElement.querySelector('.error__button');
  const handlerForEscEvent = (evt) => listenOnEscape(evt, removingElement);

  if (button) {
    addClosingMessageByButton(button, removingElement, handlerForEscEvent);
  }

  addClosingMessageByEsc(handlerForEscEvent);
  addClosingMessageByClick(removingElement, handlerForEscEvent);
}

function showMessage(outerContainer, innerContainer) {
  const messageTemplate = document.querySelector(outerContainer)
    .content
    .querySelector(innerContainer);
  const newSign = messageTemplate.cloneNode(true);

  addClosingMessage(newSign);

  document.querySelector('body').appendChild(newSign);
}

const getCurrentOption = (select) => select.options[select.selectedIndex];

function resetDisabledAttr(field) {
  for (const item of field.options) {
    item.removeAttribute('disabled');
  }
}

export {
  offerForm,
  offerFormFields,
  filtersForm,
  filtersFormFields,
  showMessage,
  showAlert,
  setInactiveMode,
  setActiveMode,
  getCurrentOption,
  resetDisabledAttr
};
