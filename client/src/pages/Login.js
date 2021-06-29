import React, { useState } from "react"
import { Row, Col, Card, CardTitle, Icon } from "react-materialize"
import { Input, TextArea, FormBtn } from "../components/Form";

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
    <Row className="center">
        <Col m={8} s={8} className="center">
        <Card
        actions={[
          <a key="1" href="/Register">New User? Sign Up Here</a>
        ]}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Welcome! Please sign in to continue.</CardTitle>}
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
        <FormBtn
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

export default Login