import React from "react";
import { Row, Col, Card, Icon } from "react-materialize";
import tech from "../images/06.png";

const Contact = () => {
    return(
        <Row>
            <Col s={7}>
            <img 
                style={{float:"right", marginTop: "50px", marginBottom: "50px", maxWidth:"100%", height:"auto", borderRadius:50}} 
                src={tech}
                alt="tech"
                />
            </Col>
            <Col s={5}>
                <Card
                style={{float:"left", marginTop: "50px", marginBottom: "50px", marginLeft:"10%", borderRadius:50}} 
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title="Our Company's Full Name Here">
                    <ul>
                    <li>12345 Address St.</li>
                    
                    <li>San Antonio, TX 78201</li>

                    <li>Phone: 210-123-4567</li>
                    </ul>
                </Card>
            </Col>
        </Row>
    );
};

export default Contact