import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import background from "../images/background.png";
import API from "../utils/API";
import ProductCard from "../components/ProductCard";
import Clearview from "../images/4.png";
import HDS from "../images/3.png";
import DisposableBSS from "../images/2.png";
import Rhinofreeze from "../images/5.png";
import "./style.css";

class Products extends Component {
  state = {
    products: {}
  };

  componentDidMount() {
    API.products()
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="section" style={{backgroundImage: `url(${background})`, height: 100}}>
        </div>
        <div className="container contain" id="contain">
        {/* New Mapping Function with new ProductCard component */}
        <Row>
          {products.map(product => (
          <ProductCard 
          id={products.id}
          name={products.name}
          slug={products.slug}
          description={products.description}
          use={products.use}
          benefits={products.benefits}
          />))
          }
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
}


export default Products