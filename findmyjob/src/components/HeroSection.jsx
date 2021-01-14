import React from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import "./HeroSection.css";

function HeroSection({ searchValue, setsearchValue }) {
  return (
    <div className="hero-container">
      <h1>TROUVEZ VOTRE JOB</h1>
      <p>Qu'est ce que vous attendez ?</p>
      <div className="hero-btns">
        <SearchBar searchValue={searchValue} setsearchValue={setsearchValue} />
      </div>
    </div>
  );
}

export default HeroSection;
