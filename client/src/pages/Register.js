import React, { useState } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { Input, FormBtn } from "../components/Form";
import background from "../images/background.png";
import headerpic from "../images/30.jpg";

const Register = () => {
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
  };
  
  // When the form is submitted, user & password must be authenticated
  // Note: This does not actually do anything yet:
  // function handleFormSubmit(event) {
  //     event.preventDefault();
  //     if (formObject.email && formObject.password) {
  //     API.authenticate({
  //         email: formObject.email,
  //         password: formObject.password,
  //     })
  //         .then(res => loadBooks())
  //         .catch(err => console.log(err));
  //     }
  // };

  return (
    <Col xl={12} s={12}>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
      </div>
      <Row className="center">
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
        <Col s={2}></Col>
      </Row>
    </Col>
  );
};


export default Register