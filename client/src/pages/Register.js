import React, { useState } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { Input, FormBtn } from "../components/Form";
import background from "../images/background.png";
import headerpic from "../images/exampic.jpg";
import API from "../utils/API";

const Register = () => {
  const [formObject, setFormObject] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
  };
  
  // When the form is submitted, user & password must be authenticated
  function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.username && formObject.password && formObject.first && formObject.last && formObject.dea && formObject.address && formObject.city && formObject.state && formObject.zip && formObject.phone && formObject.email) {
      API.register({
        username: formObject.username,
        password: formObject.password,
        first: formObject.first,
        last: formObject.last,
        dea: formObject.dea,
        practice: formObject.practice,
        address: formObject.address,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
        phone: formObject.phone,
        email: formObject.email,
      })
        .then(res => res.redirect("/home"))
        .catch(err => {setErrorMessage({errorMessage: err.message});})
      }
  };

  return (
    <Col xl={12} s={12}>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
      </div>
      <Row className="center" style={{backgroundImage: `url(${background})`}}>
        <Col s={2}></Col>
        <Col m={8} s={8} className="center">
          <Card
          header={<CardTitle image={headerpic}>Please fill out all required information below</CardTitle>}
          className="blue-grey darken-1"
          style={{marginTop:"25px", paddingTop:"20px", paddingBottom:"25px", borderRadius:20}}
          >
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
            name="zip"
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
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
            </form>
            {errorMessage && <div className="error"> {errorMessage} </div>}
          </Card>
        </Col>
        <Col s={2}></Col>
      </Row>
    </Col>
  );
};


export default Register