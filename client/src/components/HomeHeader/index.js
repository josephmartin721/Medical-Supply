import React from "react";
import { Col } from "react-materialize";
import homeheaderpic from "../../images/homeheader.png"

function HomeHeader() {
    return (
        <Col 
        style={{width: "100%", minHeight: "942px", backgroundImage: `url(${homeheaderpic})`}} 
        xl={12}
        s={12}>
        </Col>
    );
}

export default HomeHeader;