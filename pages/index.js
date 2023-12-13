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
// const cardImagePreviewModal = document.querySelector("#preview-image-modal");

// buttons and other elements//
const profilAddButton = document.querySelector("#profile-add-button");
const profileEditButton = document.querySelector("#profile-edit-button");

// const profileTitle = document.querySelector(".js-profile-title");
// const profileDescription = document.querySelector(".js-profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
// const cardPlaceInput = profileAddModal.querySelector("#profile-place-input");
// const cardLinkInput = profileAddModal.querySelector("#profile-link-input");
// const previewModal = cardImagePreviewModal.querySelector(
//   ".modal__preview-image"
// );
// const previewModalCaption = cardImagePreviewModal.querySelector(
//   ".modal__preview-caption"
// );

//forms//
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = profileAddModal.querySelector(".modal__form");
//
// const modals = document.querySelectorAll(".modal");

// function handleImageClick(cardData) {
//   cardPreviewModal.open(cardData, cardData.name, cardData.name);
// }

profilAddButton.addEventListener("click", () => {
  newCardModal.open();
});

const addFormValidator = new FormValidator(settings, addCardFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(settings, profileEditForm);

const profileUserInfo = new UserInfo(
  ".js-profile-title",
  ".js-profile-description"
);

const newEditModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

newEditModal.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const { name, description } = profileUserInfo.getUserInfo();
  profileTitleInput.value = name;
  profileDescriptionInput.value = description;
  newEditModal.open();
});

// function handleCardFormSubmit(formData) {
//   const name = formData.name;
//   const link = formData.link;
//   const cardData = { name: name, link: link };
//   elementsCards.addItem(cardData);
//   profileAddModal.close();
//   addFormValidator.resetValidation();
// }

function handleCardFormSubmit(formData) {
  const card = createCard({ name: formData.name, link: formData.link });
  cardSection.addItem(card);
  newCardModal.close();
}

const newCardModal = new PopupWithForm(
  "#profile-add-modal",
  handleCardFormSubmit
);

newCardModal.setEventListeners();

function createCard(cardData) {
  return new Card(cardData, "#card-template", () => {
    cardPreviewModal.open(cardData.name, cardData.link);
  }).getView();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardEl = createCard(cardData);
      cardSection.addItem(cardEl);
    },
  },
  ".js-elements-cards"
);

cardSection.renderItems();

editFormValidator.enableValidation();

const cardPreviewModal = new PopupWithImage("#preview-image-modal");
cardPreviewModal.addEventListeners();

function handleProfileEditSubmit(formData) {
  //console.log(formData);
  profileUserInfo.setUserInfo(formData.title, formData.description);
  newEditModal.close();
}
