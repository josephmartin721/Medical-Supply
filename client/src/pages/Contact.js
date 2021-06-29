import React from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import tech from "../images/06.png";

const Contact = () => {
    return(
        <Row>
            <Col s={8}>
            <img 
                style={{marginTop: "50px", marginBottom: "50px", maxWidth:"100%", height:"auto", borderRadius:50}} 
                src={tech} 
                alt="tech"
                />
            </Col>
            <Col s={4}>
            </Col>
        </Row>
    );
};

export default Contact