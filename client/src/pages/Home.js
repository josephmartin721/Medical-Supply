import React from "react";
import { Row, Col, Card, Icon } from "react-materialize";
import HomeHeader from "../components/HomeHeader";
import Jumbotron from "../components/Jumbotron";
import logo from "../images/logo.png";
import background from "../images/background.png"
// import Jumbotron from "../components/Jumbotron";
// import homedata from "./homedata.json";

const Home = () => {
    return(
    <div>
    <HomeHeader />
    <div>
    <Row style={{marginTop: "5px", backgroundImage: `url(${background})`}}>
        <Row>
            <Col m={4} s={4} className="center">
                <Card
                style={{marginTop: "100px"}} 
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title="WITTY CATCH PHRASE HERE!!!!!!!!!!!!!!!!!!!!!!!!!">
                </Card>
            </Col>
            <Col className="center" m={4} s={4}>
                <img style={{marginTop: "50px", marginBottom: "50px"}} src={logo} alt="logo"/>
            </Col>
            <Col  m={4} s={4} className="center">
            <Card
            style={{marginTop: "100px"}} 
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
        </Row>
        <Jumbotron>
            <h1 style={{color:"white"}}>About Us</h1>
            <h4 style={{color:"white"}}>In 2021, our company started out....</h4>
        </Jumbotron>
    </Row>
    </div>
    </div>
    );
};

export default Home;