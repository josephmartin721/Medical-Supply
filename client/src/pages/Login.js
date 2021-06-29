import React, { useState } from "react"
import { Row, Col, Card, Icon } from "react-materialize"
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
        <form 
        style={{marginTop: "100px"}} 
        className="blue-grey darken-1"
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
          disabled={!(formObject.email && formObject.password)}
        //   onClick={handleFormSubmit}
        >
          Submit Book
        </FormBtn>
      </form>
    );
};

export default Login