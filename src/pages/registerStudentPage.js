import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";

function RegisterStudentForm() {
  return (
    <div>
      <div className="col-md-4 offset-md-4">
        <h1>Register Student</h1>
      </div>
      <div className="col-md-4 offset-md-4">
        <Form>
          <Form.Group controlId="registerStudentForm.ControlInput1">
            <Form.Label >First Name</Form.Label>
            <Form.Control type="first_name" />
            <Form.Label >Last Name</Form.Label>
            <Form.Control type="last_name" />
          </Form.Group>
          <Form.Group controlId="registerStudentForm.ControlSelect1">
            <Form.Label>Grade</Form.Label>
            <Form.Control as="select">
              <option>K</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default RegisterStudentForm