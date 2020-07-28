import React from 'react'
import { Col, Form, Button } from "react-bootstrap";

function CreateClass() {
  return (
    <div className="col-md-8 offset-md-2">
      <Form onSubmit={e => this.props.handle_signup(e, this.state)}>

        <div className='col-md-6 offset-md-3'>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
              type="email"
              placeholder=""
              />
            </Form.Group>
  
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Class Size</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </div>

        <div className='col-md-8 offset-md-2'>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
    
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
        </div>

        <div className='col-md-8 offset-md-2'>
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
        </div>

        <div className='col-md-6 offset-md-3'>
          <Form.Row >
            <Form.Group as={Col} controlId="startDate">
              <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" name="Start Date" placeholder="">
                </Form.Control>
            </Form.Group>
            <Form.Group as ={Col} controlId="endDate">
              <Form.Label>End Date</Form.Label>
                <Form.Control type="date" name="End Date" placeholder="">
                </Form.Control>
            </Form.Group>
          </Form.Row>
        </div>

        <div className='col-md-6 offset-md-5'>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>


      </Form>
    </div>
  )
}

export default CreateClass