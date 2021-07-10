import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import { Link, useParams } from "react-router-dom";
import background from "../images/background.png";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Products from "./Products";
import MedProducts from "./products.json";
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
           <h2>{data.name}</h2>
        </div>
        
    )
}

export default ProductId