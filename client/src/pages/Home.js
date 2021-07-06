import React from "react";
import { Col } from "react-materialize";
import HomeHeader from "../components/HomeHeader";
import Jumbotron from "../components/Jumbotron";
import background from "../images/background.png"

const Home = () => {
    return(
    <Col xl={12} s={12}>
        <div className="section" style={{backgroundImage: `url(${background})`}}>
            <div className="row container white-text">
                <h2 className="header" style={{float:"left", marginLeft:50}}>
                Procession in the Evolution of ENT Technology
                </h2>
            </div>
        </div>
        <HomeHeader />
        <Jumbotron>
            <h1 style={{color:"white"}}>About Us</h1>
            <h4 style={{color:"white"}}>In 2021, our company started out....</h4>
        </Jumbotron>
    </Col>
    );
};

export default Home;