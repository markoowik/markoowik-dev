import React from "react";

import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alisher</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <NavLink to="/contacts">
          <a href="#!" className="btn">
            Connect with us
          </a>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
