export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  //Eventlisteners//

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__trash-icon")
      .addEventListener("click", () => {
        this._handleTrashIcon();
      });

    this._cardElement
      .querySelector(".js-card-image")
      .addEventListener("click", () => {
        this._handleImageClick(cardData);
      });
  }
  //Handlers//

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__button")
      .classList.toggle("card__button_active");
  }

  _handleTrashIcon() {
    this._cardElement.remove();
  }

  _handleImageClick() {
    this._cardElement
      .querySelector(".js-card-image")
      .classList.add("modal_opened");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardImageEl = this._cardElement.querySelector(".js-card-image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");

    this._cardImageEl.src = this._link;
    this._cardTitleEl.textContent = this._name;
    this._cardImageEl.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
