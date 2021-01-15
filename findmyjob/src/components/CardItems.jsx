import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Carditem(props) {
  return (
    <>
      <li className="cards__item">
        <a
          className="cards__item__link"
          href="https://www.easypartner.fr/offres-emplois/developpeur-react-js-pour-une-entreprise-avec-de-grandes-ambitions/"
          target="_blank"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="News sur l'emploi"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default Carditem;
