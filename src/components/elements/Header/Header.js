import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ searchMovies }) => (
  <div className="rmdb-header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-9 col-lg-9">
          <Link to="/">
            <img
              className="rmdb-logo"
              src="/images/reactMovie_logo.png"
              alt="rmdb-logo"
            />
          </Link>
          <img
            className="rmdb-tmdb-logo"
            src="/images/tmdb_logo.png"
            alt="tmdb-logo"
          />
        </div>
        <div className="searchbar col-xs-3 col-lg-3">
          <SearchBar callback={searchMovies} />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
