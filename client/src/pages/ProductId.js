import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, CardTitle, Button } from "react-materialize";
import { Link } from "react-router-dom";
import background from "../images/background.png";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Products from "./Products";
import MedProducts from "./products.json";
import API from "../utils/API";


const ProductId = (props) => { 
    const [data, setData] = useState([])
    console.log(props)
    const fetchData = () => {
        API.productById(props.match.params.id)
        .then(response => setData(response))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default ProductId