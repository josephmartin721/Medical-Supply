import React from "react";
import { Col } from "react-materialize";
import homeheaderpic from "../../images/homeheader.png"

function HomeHeader() {
    return (
        <Col 
        // style={{width: "100%", minHeight: "942px", backgroundImage: `url(${homeheaderpic})`}} 
        xl={12}
        s={12}>
            <img style={{width: "100%", height: "auto"}} src={homeheaderpic} alt=""/>
        </Col>
    );
}

export default HomeHeader;