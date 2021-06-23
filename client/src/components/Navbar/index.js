import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Leticia Mendiola
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={window.location.pathname === "/Resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Profiles"
              className={window.location.pathname === "/Profiles" ? "nav-link active" : "nav-link"}
            >
              Profiles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;