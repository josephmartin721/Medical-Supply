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
            <Card 
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title="Card title">
                WITTY CATCH PHRASE HERE!!!!!!!!!!!!!!!!!!!!!!!!!
            </Card>
            <Col>
                <img src={logo} alt="logo"/>
            </Col>
            <Card
            actions={[
                <a key="1" href="#">This is a link</a>
                ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title="Card title">
                Browse Our Products Here
            </Card>
        </div>
    </div>
    );
};

export default Home;