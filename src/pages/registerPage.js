import React from 'react'
import PropTypes from 'prop-types';
import { Col, Form, Button } from "react-bootstrap";

class RegisterForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <div>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.username}
              onChange={this.handle_change}
              />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handle_change}
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
    )
  }
}

export default RegisterForm;

RegisterForm.propTypes = {
  handle_register: PropTypes.func.isRequired
};