import React, { Component } from "react";
import { Card, Row, Col, SearchForm } from "react-materialize";
import homeheader from "../images/homeheader.png";
import "./style.css";



class Contact extends Component {
    render() {
        return (
            <div>
                <Row>
                  <Col>
                    <img src={homeheader} id="logo"
                    width="500"
                    height="250"
                    />
                  </Col>

                  
                  <Col>
                    <Card s={6} m={6} className="teal center card-panel s12 m12" id="info">
                        Company Name
                        <br/>
                        <br/>
                        1234 Address St,
                        Address, ST 11111
                        <br/>
                        <br/>
                        Phone: 123-456-7890
                        <br/>
                        <br/>
                        Email: email@email.com
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <header className="center" id="appointment">
                  Schedule an Appointment Today!
                  </header>
                </Row>

                <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="name" type="text" class="validate"/>
          <label for="name">Contact Full Name</label>
        </div>
        <div class="input-field col s6">
          <input id="phone" type="text" class="validate"/>
          <label for="phone">Contact Phone Number</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Contact Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="business" type="text" class="validate"/>
          <label for="business">Name of Practice</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="City, State, Zip Code" id="text" type="address" class="validate"/>
          <label for="text">Address of Practice</label>
        </div>
      </div>
      <div class="row">
          <div class="input-field col s12">
            <input id="practice" type="text" class="validate"/>
            <label for="practice">Product(s) in question</label>
          </div>
      </div>
    </form>
  </div>
              </div>
        )
    }
}

export default Contact