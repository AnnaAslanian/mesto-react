import "../index.css";
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };
  function handleCardClick(item) {
    setSelectedCard(item)
  };

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard()
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title={"Редактировать профиль"}
          name={"profile"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
        >
          <input type="text" id="error-value" name="name" className="popup__name popup__name_input_value" minLength={2} maxLength={40} placeholder="Имя" defaultValue="" required />
          <span className="error-text error-value-error"></span>
          <input type="text" id="error-about" name="about" className="popup__name popup__name_input_about" minLength={2} maxLength={200} placeholder="Описание" defaultValue="" required />
          <span className="error-text error-about-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title={"Новое место"}
          name={"mesto"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Создать"}
        >
          <input type="text" id="title" name="name" className="popup__name popup__name_input_title" minLength={2} maxLength={30} placeholder="Название" defaultValue="" required />
          <span className="error-text error-title-error"></span>
          <input type="url" id="url" name="link" className="popup__name popup__name_input_link" placeholder="Ссылка на картинку" defaultValue="" required />
          <span className="error-text error-link-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title={"Редактировать аватар"}
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
        >
          <input type="url" id="avatar" name="avatar" className="popup__name popup__name_input_link" required placeholder="Ссылка на картинку" />
          <span className="error-text avatar-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title={"Вы уверены"}
          name={"delete"}
          onClose={closeAllPopups}
          buttonText={"Вы уверены?"}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  )
}

export default App