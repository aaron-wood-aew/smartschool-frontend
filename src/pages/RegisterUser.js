import React from 'react'
import { Col, Form, Button } from "react-bootstrap";
import schoolAPI from '../api/SchoolAPI'

class RegisterForm extends React.Component {
  state = {
    redirect: false
  };

  handleSubmit(event){
    event.preventDefault()
    const userObject = {
      username: event.target.elements[0].value,
      email: event.target.elements[1].value,
      password: event.target.elements[2].value,
      address1: event.target.elements[3].value,
      address2: event.target.elements[4].value,
      city: event.target.elements[5].value,
      state: event.target.elements[6].value,
      zip: event.target.elements[7].value,
    }
    schoolAPI.addUser(userObject)
      .then((response) => { this.setState({ redirect: true }) })
  };

  render() {
    return (
      <div className="col-md-8 offset-md-2">

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridUser">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="username" placeholder="Enter desired username" />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Password"
                />
              </Form.Group>
            </Form.Row>
          </div>
    
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
    
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
    
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
    
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="I am a Parent" />
            <Form.Check type="checkbox" label="I am a Teacher" />
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default RegisterForm;
