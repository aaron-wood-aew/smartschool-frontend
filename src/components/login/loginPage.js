import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <div className="col-md-6 offset-md-3">
      <Form onSubmit={e => this.props.handle_login(e, this.state)}>
        <Form.Group as={Form.Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            type="email"
            placeholder="Email"
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
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}



export default LoginForm
