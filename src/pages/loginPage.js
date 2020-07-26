import React from 'react'
import PropTypes from 'prop-types';
import { Col, Row, Form, Button } from "react-bootstrap";

class LoginForm extends React.Component {
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
      <Form onSubmit={e => this.props.handle_login(e, this.state)}>
        <Form.Group as={Form.Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            type="email"
            placeholder="Email"
            value={this.state.username}
            onChange={this.handle_change}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this/handle_change}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    )
  }
}

export default LoginForm

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};