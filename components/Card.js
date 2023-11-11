export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handeImageClick = handleImageClick;
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
        _handleTrashIcon();
      });

    this._cardElement
      .querySelector(".js-card-image")
      .addEventListener("click", () => {
        this._handleImageClick(this._name, this._link);
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

  _handeImageClick() {
    this._cardImageEL.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    //get card view//
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardImageEL.src = this._link;
    this._cardTitleEL.textContent = this._name;
    this._cardImageEl.alt = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}
