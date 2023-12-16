import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards } from "../utils/constants.js";
import { settings } from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

//Wrappers//

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");
const elementsCards = document.querySelector(".js-elements-cards");
const cardImagePreviewModal = document.querySelector("#preview-image-modal");

// buttons and other elements//
const profilAddButton = document.querySelector("#profile-add-button");
const profileEditButton = document.querySelector("#profile-edit-button");

const profileTitle = document.querySelector(".js-profile-title");
const profileDescription = document.querySelector(".js-profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardPlaceInput = profileAddModal.querySelector("#profile-place-input");
const cardLinkInput = profileAddModal.querySelector("#profile-link-input");
const previewModal = cardImagePreviewModal.querySelector(
  ".modal__preview-image"
);
const previewModalCaption = cardImagePreviewModal.querySelector(
  ".modal__preview-caption"
);

//forms//
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = profileAddModal.querySelector(".modal__form");
//
const modals = document.querySelectorAll(".modal");

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

const editFormValidator = new FormValidator(settings, profileEditForm);
const addFormValidator = new FormValidator(settings, addCardFormElement);

const newCardModal = new PopupWithForm(
  "#profile-add-modal",
  handleCardFormSubmit
);
newCardModal.setEventListeners();

const profileUserInfo = new UserInfo(
  ".js-profile-title",
  ".js-profile-description"
);

const newEditModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
newEditModal.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function handleImageClick(cardData) {
  cardImagePreviewModal.open(cardData.link, cardData.name);
}

function createCard(cardData, cardSelector, handleImageClick) {
  const card = new Card(cardData, cardSelector, handleImageClick);
  return card.getView();
}

function handleCardFormSubmit(inputValues) {
  const name = inputValues.name;
  const link = inputValues.link;

  const cardData = { name: name, link: link };

  elementsCards.addItem(cardData);

  profileAddModal.close();
  addFormValidator.resetValidation();
}

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData, "#card-template", handleImageClick);
  wrapper.prepend(cardElement);
}

profileEditButton.addEventListener("click", () => {
  const { name, description } = profileUserInfo.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = description;
  editFormValidator.resetValidation();
  profileEditModal.open();
});

profilAddButton.addEventListener("click", () => {
  profileAddModal.open();
});

initialCards.forEach((cardData) => renderCard(cardData, elementsCards));

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardSection.addItem(createCard(cardData));
    },
  },
  ".card"
);

cardSection.renderItems();

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const cardPreviewModal = new PopupWithImage("#preview-image-modal");
// cardPreviewModal.setEventListeners();

function handleProfileEditSubmit(inputValues) {
  profileUserInfo.setUserInfo(inputValues.name, inputValues.description);
}
