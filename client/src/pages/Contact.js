import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-materialize";
import background from "../images/background.png";
import building from "../images/building2.jpg";
import Calendly from "../components/Calendly/calendly";
import "./style.css";


class Contact extends Component {
    render() {
        return (
          <Col xl={12} s={12}>
              <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
              </div>
              <div style={{backgroundImage: `url(${building})`, backgroundSize: "100%", height: 1750}}>
              <Row style={{paddingTop: "80px", paddingBottom: "100px"}}>
                <Col s={3}></Col>
                <Col s={6} id="info">
                  <Card  className="indigo center white-text" style={{borderRadius:20}}>
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
              <Row className="center" style={{paddingBottom: "100px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4756.045372103242!2d-98.49747714887721!3d29.42882305065008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f4ded4cbfc9%3A0xa06ed7f11117329e!2s323%20W%20Martin%20St%2C%20San%20Antonio%2C%20TX%2078205!5e1!3m2!1sen!2sus!4v1626051164000!5m2!1sen!2sus" style={{width: "70%", height:400, style:"border:0;", allowfullscreen:"", loading:"lazy"}}></iframe>
              </Row>
                
              <Container>
                <Col id="schedule">
                  <Calendly/>
                </Col>
              </Container>
              </div>
            </Col>
        )
    }
}

export default Contact