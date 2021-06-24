import React from "react";
import Background from "../../background.png";
import { Row, Col } from "react-materialize";

function HomeHeader() {
    return (
        <Col 
        style={{width: "100%", minHeight: "942px", backgroundImage: `url(${Background})`}} 
        xl={12}
        s={12}>
        </Col>
    );
}

export default HomeHeader;