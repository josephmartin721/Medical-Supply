import React from "react";
import logo from "../../logo.png";
import Background from "../../06.png";
import { Row, Col } from "react-materialize";

function HomeHeader() {
    return (
        <Col 
        style={{width: "100%", backgroundImage: `url(${Background})`}} 
        xl={12}
        s={12}>
            <Row>
                <Col s={4}>
                <img s={4} className="col-4 img-fluid rounded-circle" alt="profile pic" src={logo}/>
                </Col>
                <Col s={4}></Col> 
            <Col s={4} className="col-4 white-text">
                <h4>Procession in the Evolution of ENT Technology</h4>
            </Col>
            </Row>
        </Col>
        
    );
}

export default HomeHeader;