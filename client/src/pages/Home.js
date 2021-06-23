import React from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import M from 'materialize-css';

const Home = () => {
    return(
        <div>
        <Navbar />
        <Jumbotron />
        <Jumbotron />
        <Jumbotron />
        
        </div>
    );
};

export default Home;