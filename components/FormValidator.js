export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      return showInputError(this._formElement, inputElement, settings);
    }
    hideInputError(this._formElement, inputElement, settings);
  }

  _enableButton(button, inactiveButtonClass) {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  }

  _disableButton(button, inactiveButtonClass) {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  }

  _toggleButtonStates(inputElements, submitButton, settings) {
    let foundInvalid = false;
    inputElements.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      disableButton(submitButton, settings.inactiveButtonClass);
    } else {
      enableButton(submitButton, settings.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const inputElements = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._submitButtonSelector = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonStates(inputElements, submitButton, settings);
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(this._formElement, inputElement, settings);
        this._toggleButtonStates(inputElements, submitButton, settings);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    _setEventListeners(this._form, settings);
  }
}
