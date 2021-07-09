import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import background from "../images/background.png";
import a from "../images/1.png";
import b from "../images/2.png";
import c from "../images/3.png";
import d from "../images/4.png";
import e from "../images/5.png";
import Clearview from "../images/4.png";
import HDS from "../images/3.png";
import DisposableBSS from "../images/2.png";
import Rhinofreeze from "../images/5.png";
import "./style.css";
// Commented out for now - needs to be brought back in when API call is functioning
// import API from "../utils/API";
// This is just to mock an API call and should be deleted when the true API call is functioning
import products from "./products.json"

const Products = () => {
  // Commented out for now - needs to be brought back in when API call is functioning
  // const [productState, setProductState] = useState();

  // useEffect(() => {
  //   API.products.then((res) => {
  //     setProductState(res)
  //     .catch(err => console.log(err));
  //   });
  // }, []);

  return (
    <div>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 100}}>
      </div>
      <div className="container contain" id="contain">
      {/* New Mapping Function with new ProductCard component */}
      <Row>
        {/* When API call is functioning, replace "products" with "productState" */}
        {products.map(product => (
          <Col m={4} s={6} className="center">
          <Card
          header={<CardTitle image={`url${product.image}`}>{product.name}</CardTitle>}
          >
          {/* <div className="card-image">
              <img src={`url(${props.image}`}/>
          </div>
          <CardTitle>{props.name}</CardTitle> */}
          <p>{product.slug}</p>
          <Link to={`/products/:${product.id}`}>
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
      ))}
      </Row>
      
      {/* Original "Hard Coded" Product Cards*/}
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


export default Products