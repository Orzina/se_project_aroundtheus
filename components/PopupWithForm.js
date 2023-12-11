import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.queryselector("_modal_form");
  }

  _getInputValues() {}

  close() {
    this._popupForm.reset();
    super.Popup;
  }

  setEventListeners() {
    setEventListeners();
  }

  // The second argument is a callback function that gets called when form is submitted.
  // To instentiate the popup with the form class we pass the popup selector and a callback function.
  // The consructor runs. But since the call back or the popup class is the parent class it also -
  // needs the popup selector that we pass the in first argument. => we need to pass it to the parent constructor -
  // using the super method
  // evantually the popupwithform will envoke the spcific form using the handlefromsubmit function
  // the super will manually activate the parent class (the popupclass)
  // popupElement is the current form we're dealing with
  // when calling the close method again we need to use the super method
  //Super is kinda like "this" key work but it refers to that parent class
}
