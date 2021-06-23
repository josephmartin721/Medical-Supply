import React from "react";
import logo from "../../logo.png";
import Background from "../../06.png";
import { Col } from "react-materialize";

function HomeHeader() {
    return (
        <Col 
        style={{backgroundImage: `url(${Background})`}} 
        className="container align-items-center row z-depth-5"
        s={12}>
            <div className="col-2"></div>
            <img className="col-4 img-fluid rounded-circle" alt="profile pic" src={logo}/>
            <div className="col-2"></div> 
            <div className="col-3 card-content">
                <h1 textClassName="text-white">Procession in the Evolution of ENT Technology</h1>
            </div>
            <div className="col-1"></div>
        </Col>
    );
}

export default HomeHeader;