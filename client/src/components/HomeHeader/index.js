import React from "react";
import { Parallax } from "react-materialize";
import Jumbotron from "../../components/Jumbotron";
import homeheaderpic from "../../images/06.png";
import pictwo from "../../images/29.jpg";

function HomeHeader() {
    return (
    <div>
        <Parallax
            image={<img alt="" src={homeheaderpic} style={{width: "auto", height: "auto"}}/>}
            options={{
            responsiveThreshold: 1
            }}
        />
        <Jumbotron>
            <h1 style={{color:"white"}}>About Us</h1>
            <h4 style={{color:"white"}}>In 2021, our company started out....</h4>
        </Jumbotron>
        <Parallax
            image={<img alt="" src={pictwo} style={{width: "auto", height: "auto"}}/>}
            options={{
            responsiveThreshold: 1
            }}
        />
    </div>
    );
}

export default HomeHeader;