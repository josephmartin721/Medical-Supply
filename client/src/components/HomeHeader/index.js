import React from "react";
import { Col, Row, Card, Icon, Parallax } from "react-materialize";
import homeheaderpic from "../../images/06.png";
import pictwo from "../../images/09.png";
import background from "../../images/background.png";
import logo from "../../images/logo.png";

function HomeHeader() {
    return (
    <div>
        <Parallax
            image={<img alt="" src={homeheaderpic} style={{width: "auto", height: "auto"}}/>}
            options={{
            responsiveThreshold: 1
            }}
        />
        <Row style={{backgroundImage: `url(${background})`, objectFit: "contain", width: "100.8%", height: "auto", backgroundPosition: "50% 50%", backgroundSize: "100% cover!important", overflow: "hidden"}}>
            <Col s={4} className="center">
                <Card
                style={{marginTop: "45px", marginLeft: "10px"}}
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title="Excellence is our Specialty">
                </Card>
            </Col>
            <Col s={4} className="center">
                <img 
                style={{marginTop: "10px", marginBottom: "10px", maxWidth:"100%", height:"auto"}} 
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
                textClassName="white-text"
                title="Browse Our Products Here">
                </Card>
            </Col>
        </Row>
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