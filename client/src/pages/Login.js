import React, { useState } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { Input, FormBtn } from "../components/Form";
import background from "../images/background.png";
import headerpic from "../images/loginpic.jpg";
import API from "../utils/API";

const Login = () => {
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
    if (formObject.username && formObject.password) {
    API.login({
      email: formObject.username, 
      password: formObject.password,
    })
      .then(res => res.redirect("/home"))
      .catch(err => setErrorMessage(err.message))
    }
  };

  return (
    <Col xl={12} s={12}>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 100}}>
      </div>
      <Row className="center" style={{backgroundImage: `url(${background})`}}>
        <Col s={2}></Col>
        <Col s={8} className="center">
          <Card
          actions={[
            <a key="1" href="/Register">New User? Sign Up Here</a>
          ]}
          header={<CardTitle image={headerpic}>Welcome! Please sign in to continue.</CardTitle>}
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
            type="password"
            placeholder="Password"
            />
            <FormBtn
              disabled={!(formObject.username && formObject.password)}
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

export default Login