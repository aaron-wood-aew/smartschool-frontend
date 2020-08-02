import React, { Component }from 'react'
import { Redirect } from 'react-router'
import { Col, Form, Button } from "react-bootstrap";
import schoolAPI from '../../api/SchoolAPI'

class RegisterForm extends Component {
  state = {
    redirect: false,
  };

  handleSubmit = (event) => {
    console.log("submitted!!!!!!!!!!!!!!!!!")
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
      .then((response) => this.setState({ redirect: true }))
      .catch(err => console.log(err))
    localStorage.setItem('isLoggedIn', true)
  };

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to = "dashboard/" />
    }
    return (
      <div className="col-md-8 offset-md-2">

        <Form onSubmit={this.handleSubmit}>
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
                <option value="">...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
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
