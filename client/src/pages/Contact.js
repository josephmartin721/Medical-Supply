import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-materialize";
import background from "../images/background.png";
import Calendly from "../components/Calendly/calendly";
import "./style.css";


class Contact extends Component {
    render() {
        return (
            <div>
              <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
                </div>
                <Row>
                  <Col s={3}></Col>
                  <Col s={6} id="info">
                    <Card  className="indigo center white-text">
                      <h5>Contact Us</h5>
                      <hr/>
                        <p>Company Name</p>
                        <br/>
                        <p>1234 Address St,
                        Address, ST 11111</p>
                        <br/>
                        <p>Phone: 123-456-7890</p>
                        <br/>
                        <p>Email: email@email.com</p>
                    </Card>
                  </Col>
                  <Col s={3}></Col>
                </Row>
                
              <Container>
                <Col id="schedule">
                  <Calendly/>
                </Col>
              </Container>
            </div>
        )
    }
}

export default Contact