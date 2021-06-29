import React from "react";
import { Row, Col, Card, Icon } from "react-materialize";
import tech from "../images/06.png";

const Contact = () => {
    return(
        <Row>
            <Col s={8}>
            <img 
                style={{marginTop: "50px", marginBottom: "50px", maxWidth:"100%", height:"auto", borderRadius:50}} 
                src={tech} 
                alt="tech"
                />
            </Col>
            <Col s={4}>
                <Card
                style={{marginTop: "50px", marginBottom: "50px", marginRight:"10px", borderRadius:50}} 
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title="Our Company's Full Name Here">
                    12345 Address St.
                    San Antonio, TX 78201

                    Phone: 210-123-4567
                </Card>
            </Col>
        </Row>
    );
};

export default Contact