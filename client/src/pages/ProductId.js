import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, CardTitle, Button, Container } from "react-materialize";
import { Link, useParams } from "react-router-dom";
import background from "../images/background.png";
import API from "../utils/API";


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
        <div style={{backgroundImage: `url(${background})`, height: 100}}>
            <Row>
                <Col>
                <Card>
                    {data.name}
                </Card>
                </Col>

                <Col>
                <Card>
                    <header>{data.name}</header>
                    <p>{data.description}</p>
                </Card>


                <Card>
                        {data.use}
                        {data.benefits}
                        </Card>
                </Col>
                    
            </Row>
        </div>
        
    )
}

export default ProductId