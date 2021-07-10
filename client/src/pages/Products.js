import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import background from "../images/background.png";
// Commented out for now - needs to be brought back in when API call is functioning
// import API from "../utils/API";
// This is just to mock an API call and should be deleted when the true API call is functioning
import MedProducts from "./products.json";

const Products = (props) => {
  console.log(props)
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
      <Row style={{backgroundColor:"#260688"}}>
        {/* When API call is functioning, replace "products" with "productState" */}

        {MedProducts.map(product => (
          <Col m={4} s={6} className="center">
          <Card
          header={<CardTitle image={`url${product.image}`}></CardTitle>}
          >
          <p>Slug: {product.slug}</p>
          <p>Name: {product.name}</p>

          <Link to={`products/${product._id}`} />
          </Card>
          </Col>
        ))}

        {MedProducts.map(product => (
          <Col s={5} className="center" style={{margin: "4%"}}>
          <Card
          header={<CardTitle image={product.image} ></CardTitle>}
          >
          <h5 style={{color:"#260688"}}>{product.name}</h5>
          <p>{product.slug}</p>
          <Link to={`/products/:${product._id}`}>

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
  )
}


export default Products