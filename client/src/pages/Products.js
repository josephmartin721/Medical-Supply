import React, { Component } from "react";
import { Row, Col, Card, CardTitle, Button } from "react-materialize"
import ProductId from "./ProductId";
import "./style.css";

class Products extends Component {
    render() {
        return (
            <div className="container contain" id="contain">
              <Row >
                <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src="https://materializecss.com/images/sample-1.jpg"/>
                  </div>
                  <CardTitle>This Product Name</CardTitle>
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
                  <CardTitle>This Product Name</CardTitle>
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
                  <CardTitle>This Product Name</CardTitle>
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

              <Row>
              <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src="https://materializecss.com/images/sample-1.jpg"/>
                  </div>
                  <CardTitle>This Product Name</CardTitle>
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


          
        )
    }
}


export default Products