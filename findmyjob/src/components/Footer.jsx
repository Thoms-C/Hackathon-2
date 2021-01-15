import React from "react";
import { Main, Div, Logo, } from "./styled-components/Footer";

const Footer = () => {
  return (
    <Main>
      <Div>
        <p>2020 findmyjob.com</p>
      </Div>
      <p>Mentions légales</p>
      <Logo>
        FindMyJob
        <i className="fab fa-connectdevelop"></i>
      </Logo>
    </Main>
  );
};

export default Footer;
