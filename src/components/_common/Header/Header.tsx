import React, { useState } from "react";
import { HEADER_LINKS } from "./model";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const menuToggler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={menuToggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {HEADER_LINKS.map(link => {
              return (
                <li key={link.link} className="nav-item ">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={link.link}
                    exact={link.exact}
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
