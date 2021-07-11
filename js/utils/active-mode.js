function setActiveMode(form, formFields, disabledClassName) {
  form.classList.remove(disabledClassName);

  for (const formField of formFields) {
    formField.removeAttribute('disabled');
  }
}

export {
  setActiveMode
};
