import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavbarStyled.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FindMyJob
            <i className="fab fa-connectdevelop"></i>
          </Link>
          <div onClick={handleClick} className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" onClick={closeMobileMenu} className="nav-links">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Dashboard"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recruteur"
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Espace recruteur
              </Link>
            </li>
            <li>
              <Link
                to="/connexion"
                onClick={closeMobileMenu}
                className="nav-links-mobile"
              >
                Connexion
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Connexion</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
