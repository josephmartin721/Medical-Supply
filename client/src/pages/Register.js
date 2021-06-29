import React, { useState } from "react"
import { Row, Col, Card, CardTitle, Icon } from "react-materialize"
import { Input, TextArea, FormBtn } from "../components/Form";
import M from 'materialize-css'

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
    <Row className="center">
        <Col m={8} s={8} className="center">
        <Card
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Welcome! Please sign in to continue.</CardTitle>}
        className="blue-grey darken-1"
        style={{marginTop:"25px",paddingBottom:"100px"}}
        >
        <form 
        textClassName="white-text"
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
        name="firstname"
        placeholder="First Name"
        />
        <Input
        onChange={handleInputChange}
        name="lastname"
        placeholder="Last Name"
        />
        <Input
        onChange={handleInputChange}
        name="dea"
        placeholder="DEA Number"
        />
        <Input
        onChange={handleInputChange}
        name="nameofpractice"
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
          disabled={!(formObject.email && formObject.password)}
        //   onClick={handleFormSubmit}
        >
          Submit
        </FormBtn>
      </form>
      </Card>
      </Col>
    </Row>
    );
};


export default Register