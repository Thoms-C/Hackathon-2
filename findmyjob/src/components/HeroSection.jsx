import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>TROUVEZ VOTRE JOB</h1>
      <p>Qu'est ce que vous attendez ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          S'INSCRIRE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
