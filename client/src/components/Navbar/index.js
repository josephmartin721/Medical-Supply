import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-materialize";
import logo from "../../images/logo.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav style={{backgroundColor: "#260688"}} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="center">
      <Link className="navbar-brand" to="/" style={{fontSize: "4em", fontFamily: "impact, fantasy"}}>
        ENT Technics
      </Link>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
          <Button
          node="a"
          waves="light"
          className="indigo"
          style={{marginLeft: "5px"}}
          >
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
          </Button>
          </li>
          <li className="nav-item">
          <Button
          node="a"
          waves="light"
          className="indigo"
          style={{marginLeft: "5px"}}
          >
            <Link
              to="/Products"
              className={window.location.pathname === "/Products" ? "nav-link active" : "nav-link"}
            >
              Products
            </Link>
          </Button>
          </li>
          <li className="nav-item">
          <Button
          node="a"
          waves="light"
          className="indigo"
          style={{marginLeft: "5px"}}
          >
            <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact Us
            </Link>
          </Button>
          </li>
          <li className="nav-item">
          <Button
          node="a"
          waves="light"
          className="indigo"
          style={{marginLeft: "5px"}}
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
        <img 
        style={{float: "right", marginRight:"50px", width:"auto", height:70}} 
        src={logo} 
        alt="logo"
        />
      </div>
    </nav>
  );
}

export default Navbar;