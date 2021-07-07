import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import background from "../images/background.png";
import Clearview from "../images/Clearview.jpg";
import HDS from "../images/HDS.png";
import DisposableBSS from "../images/DisposableBSS.jpg";
import Rhinofreeze from "../images/Rhinofreeze.png";
import "./style.css";

class Products extends Component {
    render() {
        return (
            <div>
              <div className="section" style={{backgroundImage: `url(${background})`, height: 100}}>
              </div>
              <div className="container contain" id="contain">
              <Row >
                <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src={Clearview}/>
                  </div>
                  <CardTitle>Clearview</CardTitle>
                  <p>kjdsflsjfoijef</p>

                  <Link to="/products/:id">
                  <Button
                  node="button"
                  waves="light"
                  className="indigo btn-small"
                  style={{marginBottom: "5px"}}
                  >
                    View
                  </Button>
                  </Link>
                  <br/>
                  <Link to={"/contact"}>
                    <Button 
                    node="button"
                    waves="light"
                    className="indigo btn-small"
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
                  </Card>
                  </Col>
                  
                    <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src={HDS} width="190" height="190"/>
                  </div>
                  <CardTitle>HDS</CardTitle>
                  <p>kjdsflsjfoijef</p>

                  <Link to="/products/:id">
                  <Button
                  node="button"
                  waves="light"
                  className="indigo btn-small"
                  style={{marginBottom: "5px"}}
                  >
                    View
                  </Button>
                  </Link>
                  <br/>
                  <Link to={"/contact"}>
                    <Button node="button"
                    waves="light"
                    className="indigo btn-small"
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
                  </Card>
                </Col>
              </Row>

              <Row>
              <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src={DisposableBSS} width="190" height="190"/>
                  </div>
                  <CardTitle>Disposable BSS</CardTitle>
                  <p>kjdsflsjfoijef</p>

                  <Link to="/products/:id">
                  <Button
                  node="button"
                  waves="light"
                  className="indigo btn-small"
                  style={{marginBottom: "5px"}}
                  >
                    View
                  </Button>
                  </Link>
                  <br/>
                  <Link to={"/contact"}>
                    <Button node="button"
                    waves="light"
                    className="indigo btn-small"
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
                  </Card>
                </Col>

                <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src={Rhinofreeze} height="190"/>
                  </div>
                  <CardTitle>Rhinofreeze</CardTitle>
                  <p>kjdsflsjfoijef</p>

                  <Link to="/products/:id">
                  <Button
                  node="button"
                  waves="light"
                  className="indigo btn-small"
                  style={{marginBottom: "5px"}}
                  >
                    View
                  </Button>
                  </Link>
                  <br/>
                  <Link to={"/contact"}>
                    <Button node="button"
                    waves="light"
                    className="indigo btn-small"
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
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

                  <Link to="/products/:id">
                  <Button
                  node="button"
                  waves="light"
                  className="indigo btn-small"
                  style={{marginBottom: "5px"}}
                  >
                    View
                  </Button>
                  </Link>
                  <br/>
                  <Link to={"/contact"}>
                    <Button 
                    node="button"
                    waves="light"
                    className="indigo btn-small"
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
                  </Card>
                </Col>

                <Col s={4} className="center">
                  <Card>
                  <div className="card-image">
                  <img src="https://materializecss.com/images/sample-1.jpg"/>
                  </div>
                  <CardTitle>This Product Name</CardTitle>
                  <p>kjdsflsjfoijef</p>

                  <Link to="/products/:id">
                  <Button
                  node="button"
                  waves="light"
                  className="indigo btn-small"
                  style={{marginBottom: "5px"}}
                  >
                    View
                  </Button>
                  </Link>
                  <br/>
                  <Link to={"/contact"}>
                    <Button 
                    node="button"
                    waves="light"
                    className="indigo btn-small"
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
                  </Card>
                </Col>
              </Row>
            </div>
            </div>


          
        )
    }
}


export default Products