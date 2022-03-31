import React from "react";
import { Link } from "react-router-dom";
import logo from "../search-meal.jpg";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="navbar-center">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
