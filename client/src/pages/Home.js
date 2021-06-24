import React from "react";
import { Col, Card, Icon } from "react-materialize";
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
            <Card 
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title="WITTY CATCH PHRASE HERE!!!!!!!!!!!!!!!!!!!!!!!!!">
            </Card>
        </Col>
        <Col>
            <img src={logo} alt="logo"/>
        </Col>
        <Col>
        <Card
        actions={[
            <a key="1" href="#">Products</a>
            ]}
        className="blue-grey darken-1"
        closeIcon={<Icon>close</Icon>}
        revealIcon={<Icon>more_vert</Icon>}
        textClassName="white-text"
        title="Browse Our Products Here">
        </Card>
        </Col>
    </div>
    </div>
    );
};

export default Home;