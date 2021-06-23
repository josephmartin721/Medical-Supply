import React from "react";
import Jumbotron from "../components/Jumbotron";
import HomeHeader from "../components/HomeHeader";

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