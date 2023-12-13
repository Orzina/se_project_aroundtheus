import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
// import Popup from "../components/Popup.js";
// import PopupWithForm from "../components/PopupWithForm.js";
// import Section from "../components/Section.js";
// import UserInfo from "../components/UserInfo.js";
// import PopupWithImage from "../components/PopupWithImage.js";
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

// const newCardModal = new PopupWithForm(
//   "#profile-add-modal",
//   handleCardFormSubmit
// );
// newCardModal.setEventListeners();
// const newEditModal = new PopupWithForm(
//   "#profile-edit-modal",
//   handleProfileEditSubmit
// );
// newEditModal.setEventListeners();

// const cardPreviewModal = new PopupWithImage("#preview-image-modal");
// cardPreviewModal.setEventListeners();

// const profileUserInfo = new UserInfo();

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
}

function handleImageClick(link, name) {
  previewModal.setAttribute("src", link);
  previewModal.setAttribute("alt", name);
  previewModalCaption.textContent = name;
  openPopup(cardImagePreviewModal);
}

function createCard(cardData, cardSelector, handleImageClick) {
  const card = new Card(cardData, cardSelector, handleImageClick);
  return card.getView();
}

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData, "#card-template", handleImageClick);
  wrapper.prepend(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardFormSubmit(e) {
  e.preventDefault();
  const name = cardPlaceInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link }, elementsCards);
  closePopup(profileAddModal);
  e.target.reset();
  addFormValidator.resetValidation();
}

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closePopup(modal);
    }
    if (evt.target.classList.contains("modal__close-button")) {
      closePopup(modal);
    }
  });
});

function handleEsc(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

/* -------------------------------------------------------------------------- */
/*                               Event listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  openPopup(profileEditModal);
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

profilAddButton.addEventListener("click", () => openPopup(profileAddModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, elementsCards));

editFormValidator.enableValidation();
addFormValidator.enableValidation();
