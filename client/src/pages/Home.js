import React from "react";
import Jumbotron from "../components/Jumbotron";
import HomeHeader from "../components/HomeHeader";
import homedata from "./homedata.json";

const Home = () => {
    return(
    <div>
        <HomeHeader />
        {homedata.map(data => (
            <Jumbotron />
        ))}
    </div>
    );
};

export default Home;