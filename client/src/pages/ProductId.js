import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, CardTitle, Button, Container, Icon } from "react-materialize";
import { Link, useParams } from "react-router-dom";
import background from "../images/background.png";
import API from "../utils/API";
import "./style.css";


const ProductId = (props) => { 
    const {id} = useParams()
    const [data, setData] = useState({})
    console.log(props)
    const fetchData = () => {
        API.productById(id)
        .then(response => {
            setData(response.data)})
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            <div style={{backgroundImage: `url(${background})`, height: 150}}></div>
            <Row id="idDes">
                <Col
                 m={10}
                    s={12}
                         >
                        <Card
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle id="pic" image="https://materializecss.com/images/sample-1.jpg"/>}
                        horizontal

                            >
                        <p id="name">{data.name}</p>
                        <br/>
                        <p>{data.description}</p>
                        </Card>
                </Col>

                <Col
                  m={10}
                    s={12}
                        >
                        <Card
                          actions={[
                          <Link to="/contact" style={{ color:"indigo" }}>Schedule a Meeting</Link>
                          ]}
      
                          >
                        <p id="usage">Usage:</p> 
                        <p>{data.use}</p>
                        <br/>
                        <p id="benefits">Benefits:</p>
                        <p>{data.benefits}</p>
                        </Card>
                  </Col>
            </Row>
        </div>
        
    )
}

export default ProductId