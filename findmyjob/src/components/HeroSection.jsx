import React from "react";
import "../App.css";
import "./HeroSection.css";
import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  min-height: 70vh;

  #container {
    color: white;
    text-transform: uppercase;
    font-size: 70px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    bottom: 45%;
    margin-top: 25vh;
  }

  #flip {
    height: 80px;
    overflow: hidden;
  }

  #flip > div > div {
    color: #fff;
    padding: 4px 12px;
    height: 70px;
    margin-bottom: 30px;
    display: inline-block;
  }

  #flip div:first-child {
    animation: show 15s linear infinite;
  }


  @keyframes show {
    0% {
      margin-top: -270px;
    }
    2% {
      margin-top: -200px;
    }
    16% {
      margin-top: -200px;
    }
    18% {
      margin-top: -110px;
    }
    34% {
      margin-top: -110px;
    }
    36% {
      margin-top: -5px;
    }
    50% {
      margin-top: -5px;
    }
    52% {
      margin-top: -110px;
    }
    68% {
      margin-top: -110px;
    }
    70% {
      margin-top: -200px;
    }
    84% {
      margin-top: -200px;
    }
    86% {
      margin-top: -290px;
    }
    100% {
      margin-top: -290px;
    }
  }
`;

function HeroSection() {
  return (
    <div className="hero-container">
      <Page>
        <div id="container">
          TROUVEZ VOTRE
          <div id="flip">
            <div>
              <div>JOB</div>
            </div>
            <div>
              <div>ALTERNANCE</div>
            </div>
            <div>
              <div>STAGE</div>
            </div>
            <div>
              <div>VOIE</div>
            </div>
          </div>
        </div>
      </Page>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
