import React from "react";
import Jumbotron from "../components/Jumbotron";
import HomeHeader from "../components/HomeHeader"
import M from 'materialize-css';

const Home = () => {
    return(
        <div>
        <HomeHeader />
        <Jumbotron />
        <Jumbotron />
        <Jumbotron />

        </div>
    );
};

export default Home;