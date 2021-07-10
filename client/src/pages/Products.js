import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import background from "../images/background.png";
import a from "../images/1.png";
import b from "../images/2.png";
import c from "../images/3.png";
import d from "../images/4.png";
import e from "../images/5.png";
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
      <div className="container contain" id="contain" style={{marginTop: "100px"}}>
      <Row>
        {/* When API call is functioning, replace "products" with "productState" */}
        {products.map(product => (
          <Col m={4} s={6} className="center">
          <Card
          header={<CardTitle image={`url${product.image}`}>{product.name}</CardTitle>}
          >
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
      </div>
    </div>
  )
}


export default Products