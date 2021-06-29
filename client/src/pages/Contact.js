import React, { useState } from "react"
import { Row, Col, Card, CardTitle, Icon, Parallax } from "react-materialize";
import { Input, TextArea, FormBtn } from "../components/Form";
import tech from "../images/06.png";

const Contact = () => {
    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    return(
        <div>
        <Parallax
            style={{marginTop:"75px"}}
            image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
            options={{
                responsiveThreshold: 0
            }}
        />
        <Row className="section white">
            <Col s={7}>
            <img 
                style={{float:"right", marginTop:5, marginBottom:5, maxWidth:"100%", height:"auto", borderRadius:50}} 
                src={tech}
                alt="tech"
                />
            </Col>
            <Col s={5}>
                <Card
                style={{float:"left", marginTop:5, marginBottom:5, marginLeft:"10%", borderRadius:50}} 
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title="Our Company's Full Name Here">
                    <ul>
                    <li>12345 Address St.</li>
                    
                    <li>San Antonio, TX 78201</li>

                    <li>Phone: 210-123-4567</li>
                    </ul>
                </Card>
            </Col>
        </Row>
        <Parallax
            image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        <Row className="center">
        <Col s={12} className="center">
        <Card
        className="blue-grey darken-1"
        style={{marginTop:"25px", paddingTop:"20px", paddingBottom:"25px", borderRadius:20}}
        >
        <h4>Schedule an Appointment Today!</h4>
        <h5>Please fill out the form below:</h5>
        <form 
        textClassName="white-text"
        style={{paddingBottom:25}}
        >
        <Input
        onChange={handleInputChange}
        name="username"
        placeholder="Username"
        />
        <Input
        onChange={handleInputChange}
        name="password"
        placeholder="Password"
        />
        <Input
        onChange={handleInputChange}
        name="first"
        placeholder="First Name"
        />
        <Input
        onChange={handleInputChange}
        name="last"
        placeholder="Last Name"
        />
        <Input
        onChange={handleInputChange}
        name="dea"
        placeholder="DEA Number"
        />
        <Input
        onChange={handleInputChange}
        name="practice"
        placeholder="Name of Practice"
        />
        <Input
        onChange={handleInputChange}
        name="address"
        placeholder="Address"
        />
        <Input
        onChange={handleInputChange}
        name="city"
        placeholder="City"
        />
        <Input
        onChange={handleInputChange}
        name="state"
        placeholder="State"
        />
        <Input
        onChange={handleInputChange}
        name="zipcode"
        placeholder="Zip Code"
        />
        <Input
        onChange={handleInputChange}
        name="phone"
        placeholder="Phone"
        />
        <Input
        onChange={handleInputChange}
        name="email"
        placeholder="Email"
        />
        <FormBtn
            style={{marginTop:"25px"}}
        disabled={!(formObject.username && formObject.password && formObject.first && formObject.last && formObject.dea && formObject.address && formObject.city && formObject.state && formObject.zip && formObject.phone && formObject.email)}
        //   onClick={handleFormSubmit}
        >
        Submit
        </FormBtn>
        </form>
        </Card>
        </Col>
        </Row>
        </div>
    );
};

export default Contact