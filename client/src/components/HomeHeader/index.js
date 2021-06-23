import React from "react";
import logo from "../../logo.png";
import Background from "../../06.png";
import { Row, Col } from "react-materialize";

function HomeHeader() {
    return (
        <Col 
        style={{width: "100%", minHeight: "942px", backgroundImage: `url(${Background})`}} 
        xl={12}
        s={12}>
            <Row>
                <Col s={4}>
                <img style={{marginTop: "75px"}} alt="logo" src={logo}/>
                </Col>
                <Col s={4}></Col> 
            <Col s={4} className="white-text">
                <h4 style={{marginTop: "75px"}}>Procession in the Evolution of ENT Technology</h4>
            </Col>
            </Row>
        </Col>
        
    );
}

export default HomeHeader;