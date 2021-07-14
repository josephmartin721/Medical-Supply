import React from "react";
import { Parallax, Carousel } from "react-materialize";
import Jumbotron from "../../components/Jumbotron";
import homeheaderpic from "../../images/brain.png";
import pictwo from "../../images/surgery.jpg";
import caro01 from "../../images/caro01.png";
import caro02 from "../../images/caro02.png";
import caro03 from "../../images/caro03.jpg";
import caro04 from "../../images/caro04.jpg";
import caro05 from "../../images/caro05.png";
import caro06 from "../../images/caro06.jpg";

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
            <h1 style={{color:"white", fontSize:"6vw"}}>About Us</h1>
            <h4 style={{color:"white", fontSize:"2.3vw"}}>
                In 2021, our company started out with one goal in mind - To offer state of the art specialty ENT products
                to providers in search of cutting edge equipment that will elevate their capabilities to provide the
                highest quality of care.
            </h4>
            <Carousel
            carouselId="Carousel-0"
            images={[
                `${caro01}`,
                `${caro02}`,
                `${caro03}`,
                `${caro04}`,
                `${caro05}`,
                `${caro06}`
            ]}
            options={{
                dist: -50,
                duration: 200,
                fullWidth: false,
                indicators: true,
                noWrap: false,
                numVisible: 5,
                onCycleTo: null,
                padding: -100,
                shift: 0
            }}
            />
            <p style={{color:"white", fontSize:"2.1vw"}}>
                ENT Technics offers specialty medical equipment designed to meet the needs of 
                practitioners specializing in the diagnosis of ENT disorders. Our most highly innovative product Total 
                Image consists of electromagnetic image-guided navigation used for endoscopic sinus procedures and surgeries.
            </p>
            
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