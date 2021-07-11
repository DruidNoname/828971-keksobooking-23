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
    addClosingMessageByButton(button, removingElement);
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

export {
  showMessage
};
