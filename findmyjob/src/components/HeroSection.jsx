import React from "react";
import "../App.css";
import "./HeroSection.css";
import styled from "styled-components"

const Page = styled.div`
  width: 100%;
  min-height: 70vh;

  #container {
    color: white;
    text-transform: uppercase;
    font-size: 70px;
    font-weight: bold;
    text-align:center;
    width: 100%;
    bottom: 45%;
    margin-top: 25vh
  }

  #flip {
    height: 80px;
    overflow:hidden;
  }

  #flip > div > div {
    color: #fff;
    padding: 4px 12px;
    height: 70px;
    margin-bottom: 30px;
    display: inline-block;
  }

  #flip div:first-child {
    animation: show 10s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
`

function HeroSection() {
  return (
    <div className="hero-container">

      <Page>
      <div id='container'>
      TROUVEZ VOTRE
        <div id ='flip'>
          <div>
            <div>JOB</div>
          </div>
          <div>
            <div>ALTERNANCE</div>
          </div>
          <div>
            <div>STAGE</div>
          </div>
        </div>
      </div>
      </Page>
      <div className="hero-btns">
      </div>
    </div>
  );
}

export default HeroSection;
