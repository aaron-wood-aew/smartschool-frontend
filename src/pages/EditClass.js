import React, { Component } from 'react'
import { Col, Form, Button } from "react-bootstrap";
import { Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import schoolAPI from '../api/SchoolAPI'

class EditClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: 2,
      formData: '',
      redirect: false,
    }
  }

  componentDidMount() {
    schoolAPI.fetchClassByID(this.props.match.params.id)
      .then(response => {
        this.setState({ formData: response })
      })
  }
  // this.props.match.params.id
  handleDelete = (event) => {
    const { id } = this.props.match.params
    schoolAPI.deleteClass(id)
      .then(response => this.setState({ redirect: true })
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { id } = this.props.match.params
    console.log(event.target.elements)
    const addressObject = {
      street_1: event.target.elements[2].value,
      street_2: event.target.elements[3].value,
      city: event.target.elements[4].value,
      state: event.target.elements[5].value,
      zip_code: event.target.elements[6].value,
    }

    const classObject = {
      name: event.target.elements[0].value,
      address: addressObject,
      classSize: event.target.elements[1].value,
      teacher: this.state.teacher,
      startDate: event.target.elements[7].value,
      endDate: event.target.elements[8].value,
    }

    schoolAPI.editClass(id, classObject)
  //     .then((response) => {
  //       if ( !response.ok) {
  //         throw Error (response.data)
  //       }
  //       return response
  //     })
  //     .then(() => this.setState({ teacher: 2 }))
  //     .catch(err => console.log(err))
  };
  
  // this.props.match.params.id

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />
    }
    if (this.state.formData.length === 0) {
      return (
      <h1>Waiting...</h1>
      )
    }
    const { name, address, teacher, start_date, end_date } = this.state.formData
    console.log(this.state.formData)
    return (
      <div className="col-md-8 offset-md-2">
        <Form onSubmit={this.handleSubmit}>

          <div className='col-md-6 offset-md-3'>
            <Form.Row >
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Class Name</Form.Label>
                <Form.Control
                type="text"
                placeholder=""
                name="name"
                defaultValue={name}
                />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Class Size</Form.Label>
                <Form.Control name="classSize" as="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </div>

          <div className='col-md-8 offset-md-2'>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control defaultValue={address.street_1}name="address1" placeholder="1234 Main St" />
            </Form.Group>
      
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control defaultValue={address.street_2}name="address2" placeholder="Apartment, studio, or floor" />
            </Form.Group>
          </div>

          <div className='col-md-8 offset-md-2'>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control defaultValue={address.city}name="city"/>
              </Form.Group>
      
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control defaultValue={address.state}name="state" as="select">
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
                <Form.Control defaultValue={address.zip_code}name="zip"/>
              </Form.Group>
            </Form.Row>
          </div>

          <div className='col-md-6 offset-md-3'>
            <Form.Row >
              <Form.Group as={Col} controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                  <Form.Control defaultValue={end_date}type="date" name="start_date" placeholder="">
                  </Form.Control>
              </Form.Group>
              <Form.Group as ={Col} controlId="endDate">
                <Form.Label>End Date</Form.Label>
                  <Form.Control defaultValue={end_date}type="date" name="end_date" placeholder="">
                  </Form.Control>
              </Form.Group>
            </Form.Row>
          </div>

          <div className='col-md-6 offset-md-5'>
            <Button variant="success" type="submit">
              Submit
            </Button>
            <Button variant="danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default EditClass