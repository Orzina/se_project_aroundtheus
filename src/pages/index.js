import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import {
  initialCards,
  settings,
  profilAddButton,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addCardFormElement,
} from "../utils/constants.js";

profilAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
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
  profileUserInfo.setUserInfo(formData.title, formData.description);
  newEditModal.close();
}
