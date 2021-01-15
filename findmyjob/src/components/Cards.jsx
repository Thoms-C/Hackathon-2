import React from "react";
import CardItems from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards__title">Les actualités de l'emploi </h1>
      <div className="cards__container">
        <ul className="cards__items">
          <CardItems
            className="text"
            src="https://solvers.fr/wp-content/uploads/2019/06/8-astuces-pour-ame%CC%81liorer-les-performances-des-applications-React.png"
            text="React js : Ce que vous avez besoin de savoir avant d'entrer en entreprise "
            label="Développeur Front"
          />

          <CardItems
            src="https://media.dogfinance.com/files/articles/le-data-analyst-ou-le-nouveau-metier-qui-recrute_b.jpg"
            text="Découvrez comment devenir Data Analyst en 2021 !"
            label="Data-analyste"
          />

          <CardItems
            src="https://www.pole-emploi.fr/files/live/sites/PE/files/dri/FAQ-prime-exceptionnelle.gif"
            text="Prime exceptionnelle: quelle articulation ?"
            label="Ingénieur logiciel"
          />
        </ul>
        <ul className="cards__items">
          <CardItems
            src="https://www.pole-emploi.fr/files/live/sites/PE/files/dri/Demission-et-periode-de-confinement-308x188.jpg"
            text="Démission lors de la période de confinement, que faire ?"
            label="Ingénieur logiciel"
          />

          <CardItems
            src="https://www.pole-emploi.fr/files/live/sites/PE/files/affiche/2020/prepa-apprentissage-insertion-jeunes-w-308.jpg"
            text="Une nouvelle voie d'insertion pour les jeunes travaillers. A découvrir !"
            label="Ingénieur logiciel"
          />

          <CardItems
            src="https://www.pole-emploi.fr/files/live/sites/PE/files/dri/je-cherche-un-emploi-aide-au-deplacement308.jpg"
            text="Aides à la mobilité : à tout besoin, sa solution"
            label="Ingénieur logiciel"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
