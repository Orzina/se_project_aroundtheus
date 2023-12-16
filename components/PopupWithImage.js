import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._imageElement = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this._titleElement = this._popupElement.querySelector(
      ".modal__preview-caption"
    );
  }
  open(imgUrl, imgAlt, imgTitle) {
    this._imageElement.alt = imgAlt;
    this._imageElement.src = imgUrl;
    this._titleElement.textContent = imgTitle;
    super.open();
  }
}
