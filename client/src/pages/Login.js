import React from "react"
import { Row, Col, Card, Icon } from "react-materialize"
import M from 'materialize-css'

const Login = () => {
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
    

    return (
        <form 
        style={{marginTop: "100px"}} 
        className="blue-grey darken-1"
        textClassName="white-text"
        >
        <Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <Input
          onChange={handleInputChange}
          name="author"
          placeholder="Author (required)"
        />
        <TextArea
          onChange={handleInputChange}
          name="synopsis"
          placeholder="Synopsis (Optional)"
        />
        <FormBtn
          disabled={!(formObject.author && formObject.title)}
          onClick={handleFormSubmit}
        >
          Submit Book
        </FormBtn>
      </form>
    );
};

export default Login