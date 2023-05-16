import "../index.css"
import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialUser()
      .then(
        (userInfo) => (
          setUserName(userInfo.name),
          setUserDescription(userInfo.about),
          setUserAvatar(userInfo.avatar)
        )
      )
      .catch((err) => console.log(`Ошибка ${err}`));
  }, [])
  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(`Ошибка ${err}`));
  }, []);
    return (
<div className="main">
          <div className="profile">
            <div className="profile__avatar-area">
              <img src={userAvatar} alt="Аватар" className="profile__logo" />
              <button type="button" className="profile__avatar-edit" aria-label="Редактировать аватар профиля" onClick={onEditAvatar} />
            </div>
            <div className="profile__edit">
              <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}>
                </button>
              </div>
              <p className="profile__about">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={onAddPlace}>
            </button>
          </div>
          <div className="elements">
            <ul className="elements__list">
            {cards.map((card) => (
            <li key={card._id}>
              <Card card={card} onCardClick={onCardClick} />
            </li>
          ))}
            </ul>
          </div>
        </div>
    )
}
export default Main;