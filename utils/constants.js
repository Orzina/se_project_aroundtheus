export const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
];

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_type_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

//Wrappers//

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");
const elementsCards = document.querySelector(".js-elements-cards");
const cardImagePreviewModal = document.querySelector("#preview-image-modal");

//Buttons and other elements//
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

const modals = document.querySelectorAll(".modal");

//forms//
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = profileAddModal.querySelector(".modal__form");
