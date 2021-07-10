import React from "react";
import { Parallax, Carousel } from "react-materialize";
import Jumbotron from "../../components/Jumbotron";
import homeheaderpic from "../../images/brain.png";
import pictwo from "../../images/surgery.jpg";
import caro01 from "../../images/caro01.png";
import caro02 from "../../images/caro02.png";
import caro03 from "../../images/caro03.jpg";
import caro04 from "../../images/caro04.jpg";

function HomeHeader() {
    return (
    <div>
        <Parallax
            image={<img alt="" src={homeheaderpic} style={{width: "auto", height: "auto"}}/>}
            options={{
            responsiveThreshold: 1
            }}
        />
        <Jumbotron>
            <h1 style={{color:"white"}}>About Us</h1>
            <h4 style={{color:"white"}}>In 2021, our company started out....</h4>
            <Carousel
            carouselId="Carousel-2"
            images={[
                `${caro01}`,
                `${caro02}`,
                `${caro03}`,
                `${caro04}`
            ]}
            options={{
                dist: -100,
                duration: 200,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                numVisible: 5,
                onCycleTo: null,
                padding: 0,
                shift: 0
            }}
            />
        </Jumbotron>
        <Parallax
            image={<img alt="" src={pictwo} style={{width: "auto", height: "auto"}}/>}
            options={{
            responsiveThreshold: 1
            }}
        />
    </div>
    );
}

export default HomeHeader;