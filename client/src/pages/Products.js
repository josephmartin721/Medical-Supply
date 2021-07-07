import React, { Component } from "react";
import { Row, Col, Card, CardTitle, Button } from "react-materialize"
import ProductId from "./ProductId";
import background from "../images/background.png";
import "./style.css";

class Products extends Component {
  render() {
     return (
      <Col xl={12} s={12}>
        <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
        </div>
        <div className="container contain" id="contain">
          <Row >
            <Col s={4} className="center">
              <Card>
              <div className="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <CardTitle>Total Image</CardTitle>
              <p>kjdsflsjfoijef</p>
              <Button onClick={ProductId}>
                View
              </Button>
              </Card>
              </Col>
              
                <Col s={4} className="center">
              <Card>
              <div className="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <CardTitle>Disposable BSS</CardTitle>
              <p>kjdsflsjfoijef</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col s={4} className="center">
              <Card>
              <div className="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <CardTitle>HDS</CardTitle>
              <p>kjdsflsjfoijef</p>
              </Card>
            </Col>
            <Col s={4} className="center">
              <Card>
              <div className="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <CardTitle>Clearview</CardTitle>
              <p>kjdsflsjfoijef</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col s={4} className="center">
              <Card>
              <div className="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <CardTitle>Rhinofreeze</CardTitle>
              <p>kjdsflsjfoijef</p>
              </Card>
            </Col>
            <Col s={4} className="center">
              <Card>
              <div className="card-image">
              <img src="https://materializecss.com/images/sample-1.jpg"/>
              </div>
              <CardTitle>This Product Name</CardTitle>
              <p>kjdsflsjfoijef</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}


export default Products