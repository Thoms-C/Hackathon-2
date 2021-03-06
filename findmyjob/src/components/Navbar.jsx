import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavbarStyled.css";

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="nav-links-mobile"
              >
                Connexion
              </Link>
            </li>
          </ul>
          <Link to="/Dashboard" className="btn--outline">
            <span>Connexion</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
