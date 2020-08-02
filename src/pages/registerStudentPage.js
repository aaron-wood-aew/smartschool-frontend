import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";
import schoolAPI from '../api/SchoolAPI'
import { Redirect } from 'react-router'

const RegisterStudentForm = () => {
  const [state, setState] = React.useState({
    guardian_id: "",
    first_name:"",
    last_name:"",
    grade:"",
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
    const studentObject = {
      parent_id: '2',
      first_name: evt.target.elements[0].value,
      last_name: evt.target.elements[1].value,
      grade: evt.target.elements[2].value,
    }
    console.log(studentObject)
    schoolAPI.addStudent(2, studentObject)
      .then((response => { setState({ redirect: true }) })
      )
      const redirect = state.redirect
      localStorage.setItem('studentRegistered', true)
    }
    console.log(state.redirect)
    if (state.redirect) {
      return <Redirect to = '/dashboard' />
      }

      return (
        <div>
        <div className="col-md-4 offset-md-4">
          <h1>Register Student</h1>
        </div>
        <div className="col-md-4 offset-md-4">
          <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
            Register
            </Button>
          </Form>
        </div>
      </div>
    )
  }

export default RegisterStudentForm
            // class RegisterStudentForm extends Component {
            //   state = {
            //     redirect: false
            //   };
            
            //   handleSubmit(event){
            //     event.preventDefault()
            //     const studentObject = {
            //       guardian_id: 2,
            //       first_name: event.target.elements[1].value,
            //       last_name: event.target.elements[2].value,
            //       grade: event.target.elements[3].value,
            //     }
            //     console.log(studentObject)
            //     schoolAPI.addStudent(2, studentObject)
            //       .then((response) => { this.setState({ redirect: true })
            //     })
            //   };
            //   render() {