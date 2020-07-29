import React, { Component } from "react";
import axiosInstance from "../../axiosApi";
import schoolAPI from '../../api/SchoolAPI'
import { Col, Row, Form, Button } from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '',
    }
  

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
      try {
        const response = axiosInstance.post('/token/obtain/', {
          username: this.state.username,
          password: this.state.password
        });
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.response);
        return response.data;
      } catch (error) {
        throw error;
      }
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Form.Row} controlId="formHorizontalUsername">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control
              type="username"
              placeholder="Username"
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
              <Button type="submit" value="Submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default LoginForm
