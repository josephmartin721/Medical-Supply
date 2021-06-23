import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-materialize";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Company Name Here
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
              to="/Products"
              className={window.location.pathname === "/Products" ? "nav-link active" : "nav-link"}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
          <Button
          node="button"
          waves="light"
          >
            <Link
              to="/Login"
              className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
            >
              Login/Signup
            </Link>
          </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;