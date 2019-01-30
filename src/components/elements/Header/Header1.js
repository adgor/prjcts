import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/reactMovie_logo.png";
import tmdblogo from "../assets/tmdb_logo.png";
import "./Header.css";

const Header1 = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#20232a" }}
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} className="rmdb-logo" alt="rmdb-logo" />
      </Link>
      <img className="rmdb-tmdb-logo" src={tmdblogo} alt="tmdb-logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Filma <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/seriale">
              Seriale <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/kategorite">
              Kategorite <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control form-control-plaintext mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header1;
