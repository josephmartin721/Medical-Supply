import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import background from "../images/background.png";
// Commented out for now - needs to be brought back in when API call is functioning
//  import API from "../utils/API";
// This is just to mock an API call and should be deleted when the true API call is functioning
import products from "./products.json";

const Products = (props) => {
  // Commented out for now - needs to be brought back in when API call is functioning
  // const [productState, setProductState] = useState([]);

  // useEffect(() => {
  //   API.products().then((res) => {
  //     setProductState(res.data)
      
  //   }) .catch(err => console.log(err));
  // }, []);

  return (
    <div>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
      </div>
      <Row style={{backgroundColor:"#260688"}}>
        {/* When API call is functioning, replace "products" with "productState" */}
        {products.length >0 ? products.map(product => (
          <Col s={5} className="center" style={{margin: "4%"}}>
          <Card
          >
          <div className="card-image">
            <img id="pic" src={product.image} alt="medical device"/>
          </div>
          <h5 style={{color:"#260688"}}>{product.name}</h5>
          <p id="medSpecialty">{product.medicalSpecialtyDescription}</p>
          <br/>
          <Link to={`/products/${product._id}`}>
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
      )) : <h2>no data</h2>} 
      </Row>
    </div>
  )
}


export default Products