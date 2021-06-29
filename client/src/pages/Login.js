import React, { useState } from "react"
import { Row, Col, Card, CardTitle, Icon } from "react-materialize"
import { Input, TextArea, FormBtn } from "../components/Form";
import M from 'materialize-css'

const Login = () => {
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
    <Row>
        <Col m={2} s={2} className="center"></Col>
        <Col m={8} s={8} className="center">
        <Card
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Welcome! Please sign in to continue.</CardTitle>}
        className="blue-grey darken-1"
        style={{marginTop:"75px",paddingBottom:"100px"}}
        >
        <form 
        textClassName="white-text"
        >
        <Input
        onChange={handleInputChange}
        name="email"
        placeholder="Email"
        />
        <Input
        onChange={handleInputChange}
        name="password"
        placeholder="Password"
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
      <Col m={2} s={2} className="center"></Col>
    </Row>
    );
};

export default Login