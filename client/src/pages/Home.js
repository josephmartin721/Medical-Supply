import React from "react";
import { Col, Card } from "react-materialize";
import HomeHeader from "../components/HomeHeader";
import logo from "../logo.png";
// import Jumbotron from "../components/Jumbotron";
// import homedata from "./homedata.json";

const Home = () => {
    return(
    <div>
        <HomeHeader />
        <div>
            <Col>
                <img src={logo} alt="logo"/>
            </Col>
            <Card>
                
            </Card>
        </div>
    </div>
    );
};

export default Home;