import "../index.css";
import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  };
  return (
    <div className="element">
            <button className="element__delete" type="button" aria-label="Удалить"></button>
            <img className="element__img" src={card.link} alt={card.name} onClick={() => handleClick(card)} />
            <div className="element__group">
                <h2 className="element__name">{card.name}</h2>
                <div>
                    <button className="element__logo" type="button" aria-label="Нравится"></button>
                    <div className="elements__number-like">{card.likes.length}</div>
                </div>
            </div>
    </div>
  )
}

export default Card
