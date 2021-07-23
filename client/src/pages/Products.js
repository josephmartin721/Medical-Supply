import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-materialize";
import background from "../images/background.png";
// Commented out for now - needs to be brought back in when API call is functioning
 import API from "../utils/API";
// This is just to mock an API call and should be deleted when the true API call is functioning
// import products from "./products.json";

const Products = (props) => {
  // Commented out for now - needs to be brought back in when API call is functioning
  const [productState, setProductState] = useState([]);

  useEffect(() => {
    API.products().then((res) => {
      setProductState(res.data)
      
    }) .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
      </div>
      <Row style={{backgroundColor:"#260688"}}>
        {/* When API call is functioning, replace "products" with "productState" */}
        {productState.length >0 ? productState.map(product => (
          <Col s={5} className="center" style={{margin: "4%"}}>
          <Card
          >
          <div className="card-image" style={{align:"center"}}>
            <img id="pic" src={product.image} alt="medical device" 
            style={{marginLeft: "auto", marginRight: "auto", display: "block",
              width: "auto", height: "auto", maxWidth: "100%", maxHeight: "280px"}}
            />
          </div>
          <h5 style={{color:"#260688", fontSize:"1.8vw"}}>{product.name}</h5>
          <p id="medSpecialty" style={{fontSize:"1.6vw"}}>{product.medicalSpecialtyDescription}</p>
          <br/>
          <Link to={`/products/${product._id}`}>
              <Button
              node="button"
              waves="light"
              className="indigo btn-small"
              style={{marginBottom: "5px", fontSize:"1.4vw"}}
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
              style={{fontSize:"1.4vw"}}
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