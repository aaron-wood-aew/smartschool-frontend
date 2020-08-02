import React, { useState, useEffect } from "react";
import schoolAPI from '../../api/SchoolAPI'
import { Redirect } from 'react-router'
import { Col, Row, Form, Button } from "react-bootstrap";
import HomePage from '../../pages/Home'

const LoginForm = () => {
  const [state, setState] = React.useState({
    email: "",
    password:"",
    redirect:false,
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function handleSubmit(evt){
    evt.preventDefault()
    const userObject = {
      email: evt.target.elements[0].value,
      password: evt.target.elements[1].value,
    }
    schoolAPI.loginUser(userObject)
      .then((response => { setState({ redirect: true }) })
      )
      const redirect = state.redirect
      localStorage.setItem('isLoggedIn', true)
    }
    console.log(state.redirect)
    if (state.redirect) {
      return <Redirect to = '/dashboard' />
      }

  return (
    <div className="col-md-6 offset-md-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Form.Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            type="text"
            placeholder="password"
            name="password"
            onChange={handleChange}
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
  export default LoginForm
    // }
  
    // handleChange(event) {
    //   this.setState({[event.target.name]: event.target.value});
    // }
  
    // handleSubmit(event) {
    //   event.preventDefault();
    //     try {
    //       const response = axiosInstance.post('/token/obtain/', {
    //         username: this.state.username,
    //         password: this.state.password
    //       });
    //       axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
    //       localStorage.setItem('access_token', response.data.access);
    //       localStorage.setItem('refresh_token', response.data.response);
    //       return response.data;
    //     } catch (error) {
    //       throw error;
    //     }
    // }
