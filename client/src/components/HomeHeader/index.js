import React from "react";
import logo from "../../logo.png";

function HomeHeader() {
    return (
        <div style={{backgroundImage: `url(${Background})`}} className="container align-items-center row z-depth-5">
            <div className="col-2"></div>
            <img className="col-4 img-fluid rounded-circle" alt="profile pic" src={logo}/>
            <div className="col-2"></div> 
            <div className="col-3 card-content">
                <h1 className="text-white">Contact Information</h1>
            </div>
            <div className="col-1"></div>
        </div>
    );
}

export default HomeHeader;