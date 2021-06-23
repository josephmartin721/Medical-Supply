import React from "react";
import pic from "../ProfilePic.jpg";

function HomeHeader() {
    return (
        <div style={{marginTop: "70px"}} className="container align-items-center row z-depth-5">
            <div className="col-2"></div>
            <img className="col-4 img-fluid rounded-circle" alt="profile pic" src={pic}/>
            <div className="col-2"></div> 
            <div className="col-3 card-content">
                <h4 className="text-white">Contact Information</h4>
                <br></br>
                <h6 className="text-white">Phone:</h6>
                <br></br>
                <h6 className="text-white">210-608-5800</h6>
                <br></br>
                <h6 className="text-white">Email:</h6>
                <h6 className="text-white">lmendiola509@gmail.com</h6>
            </div>
            <div className="col-1"></div>
        </div>
    );
}

export default HomeHeader;