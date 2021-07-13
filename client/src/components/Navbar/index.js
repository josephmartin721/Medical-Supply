import React from "react";
import { Link } from "react-router-dom";
import { Button, Col } from "react-materialize";
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
        <Col s={10}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Button
            href="/"
            node="a"
            waves="light"
            className="indigo"
            style={{marginLeft: "10%"}}
            >Home
            </Button>
          </li>
          <li className="nav-item">
            <Button
            href="/Products"
            node="a"
            waves="light"
            className="indigo"
            style={{marginLeft: "5%"}}
            >Products
            </Button>
          </li>
          <li className="nav-item">
            <Button
            href="/Contact"
            node="a"
            waves="light"
            className="indigo"
            style={{marginLeft: "5%"}}
            >Contact Us
            </Button>
          </li>
          <li className="nav-item">
            <Button
            href="/Login"
            node="a"
            waves="light"
            className="indigo"
            style={{marginLeft: "5%"}}
            >Login/Signup
            </Button>
          </li>
        </ul>
        </Col>
        <Col s={2} style={{verticalAlign:"middle"}}>
          <img 
          style={{float: "right", marginRight:"2%", width:"auto", height:70}} 
          src={logo} 
          alt="logo"
          />
        </Col>
      </div>
    </nav>
  );
}

export default Navbar;