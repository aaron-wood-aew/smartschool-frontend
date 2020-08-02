import React, { Component } from 'react'
import SchoolAPI from '../api/SchoolAPI'
import ClassroomList from '../components/ClassroomList/ClassroomList'
import { ListGroup, Button } from 'react-bootstrap'


class TeacherPage extends Component {
  state = {
    classes: {}
  }

  // componentDidMount() {
  //   SchoolAPI.fetchClasses()
  //     .then((apiResponseJSON) => {
  //       this.setState({
  //         classes: apiResponseJSON.classes
  //       })
  //     }
  //   )
  // }

  render() {
    const classes = this.state.classes
    return (
      <div>
        <h1 className='col-md-6 offset-md-3'>
          Your Classes
        </h1>
        <hr/>
        <div className='col-md-6 offset-md-3'>
          <ClassroomList classes={this.state.classes} />
        </div>
        <div className='col-md-6 offset-md-3'>
          <Button className='col-md-3 offset-md-2' variant="info">Create Class</Button>
          <Button className='col-md-3 offset-md-2' variant="danger">Remove Class</Button>
        </div>
      </div>
    );
  }
}

export default TeacherPage