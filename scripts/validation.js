function showInputError(formElement, inputElement, { inputErrorClass }) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(inputErrorClass);
}

function hideInputError(formElement, inputElement, { inputErrorClass }) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(inputErrorClass);
}

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    return showInputError(formElement, inputElement, options);
  }
  hideInputError(formElement, inputElement, options);
}

function enableButton(button) {
  button.classList.remove("modal__button_type_inactive");
}

function disableButton(button) {
  button.classList.add("modal__button_type_inactive"); //error
}

function toggleButtonStates(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  let foundInvalid = false;
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      foundInvalid = true;
    }
  });
  if (foundInvalid) {
    disableButton(submitButton);
    return (submitButton.disabled = true);
  }
  enableButton(submitButton);
  submitButton.disabled = false;
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(".modal__button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonStates(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

const config = {
  formSelector: ".js-modal-form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_type_inactive",
  inputErrorClass: "modal__input-error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
