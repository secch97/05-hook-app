import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav data-bs-theme="dark" className="rounded-3 bg-dark navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            useContext
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse rounded-" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About Us
                </NavLink>
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/login"
                >
                  Log In
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
