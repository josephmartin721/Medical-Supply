import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, CardTitle,Icon } from "react-materialize";
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
        <div style={{backgroundImage: `url(${background})`}}>
            <div style={{backgroundImage: `url(${background})`, height: 150}}></div>
            <Row>
                <Row>
                <Col s={2}></Col>
                <Col s={8}>
                    <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={data.image}/>}
                    horizontal
                    >
                    <p id="name" style={{fontSize:"1.8vw"}}>{data.name}</p>
                    <br/>
                    <p style={{fontSize:"1.6vw"}}>{data.description}</p>
                    </Card>
                </Col>
                <Col s={2}></Col>
                </Row>

                <Row>
                <Col s={2}></Col>
                <Col s={8}>
                    <Card
                        actions={[
                        <Link to="/contact" style={{ color:"indigo" }}>Schedule a Meeting</Link>
                        ]}
                        >
                    <p id="usage" style={{fontSize:"1.8vw"}}>Usage:</p> 
                    <p style={{fontSize:"1.6vw"}}>{data.usage}</p>
                    <br/>
                    <p id="benefits" style={{fontSize:"1.8vw"}}>Benefits:</p>
                    <p style={{fontSize:"1.6vw"}}>{data.benefits}</p>
                    </Card>
                </Col>
                <Col s={2}></Col>
                </Row>
            </Row>
        </div>
        
    )
}

export default ProductId