import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.queryselector(".js-modal-form");
  }

  _getInputValues() {
    const inputData = this._popupForm.queryselectorAll(".modal__form-input");
    formData = {};
    inputData.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }

  setEventListeners() {
    super.addEventListeners;
    this._popupForm.addEventListeners("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._popupForm.reset();
    super.Popup;
  }
}

export default PopupWithForm;
