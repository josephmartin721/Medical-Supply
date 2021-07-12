import React from "react";
import { Col, Row, Card, Icon } from "react-materialize";
import HomeHeader from "../components/HomeHeader";
import background from "../images/background.png";
import logo from "../images/logo.png";

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
        <Row style={{backgroundImage: `url(${background})`, width: "100.8%", height: "auto"}}>
            <Col s={4} className="center">
                <Card
                style={{marginTop: "45px", marginLeft: "10px"}}
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text">
                    <h6>"Excellence is our Specialty"</h6>
                </Card>
            </Col>
            <Col s={4} className="center">
                <img 
                style={{paddingTop: "10px", paddingBottom: "10px", maxWidth:"100%", height:"auto"}} 
                src={logo} 
                alt="logo"
                />
            </Col>
            <Col s={4} className="center">
                <Card
                style={{marginTop: "35px", marginRight: "10px"}} 
                actions={[
                    <a key="1" href="/Products">Products</a>
                    ]}
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text">
                    <h6>"Browse Our Products Here"</h6>
                </Card>
            </Col>
        </Row>
    </Col>
    );
};

export default Home;