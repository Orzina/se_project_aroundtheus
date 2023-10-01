const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

//Wrappers//

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");
const elementsCards = document.querySelector(".js-elements-cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// buttons and other elements//
const profilAddButton = document.querySelector("#profile-add-button");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalCloseButton = profileEditModal.querySelector(
  "#profile-modal-close-button"
);
const addModalCloseButton = profileAddModal.querySelector(
  "#add-modal-close-button"
);

const profileTitle = document.querySelector(".js-profile-title");
const profileDescription = document.querySelector(".js-profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const CardPlaceInput = profileAddModal.querySelector("#profile-place-input");
const CardLinkInput = profileAddModal.querySelector("#profile-link-input");

//forms//
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = profileAddModal.querySelector(".modal__form");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function getCardsElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEL = cardElement.querySelector(".js-card-image");
  const cardTitleEL = cardElement.querySelector(".js-card-title");
  const likeButton = cardElement.querySelector(".js-card-like-button");

  likeButton.addEventListener =
    ("click",
    () => {
      likeButton.classList.toggle(".js-card-like-button-active");
    });

  cardTitleEL.textContent = cardData.name;
  cardImageEL.src = cardData.link;
  cardImageEL.alt = cardData.name;
  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardsElement(cardData);
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
  const name = CardPlaceInput.value;
  const link = CardLinkInput.value;
  renderCard({ name, link }, elementsCards);
  closePopup(profileAddModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profilAddButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileAddModal.classList.add("modal_opened");
});

addModalCloseButton.addEventListener("click", () =>
  closePopup(profileAddModal)
);

profileModalCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, elementsCards));
