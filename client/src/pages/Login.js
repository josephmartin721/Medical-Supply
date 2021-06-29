import React from "react"
import { Row, Col, Card, Icon } from "react-materialize"
import M from 'materialize-css'

const Login = () => {
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
    
    // When the form is submitted, user & password must be authenticated
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
        API.saveBook({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
        })
            .then(res => loadBooks())
            .catch(err => console.log(err));
        }
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