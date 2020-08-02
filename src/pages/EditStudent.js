import React, { Component } from 'react'

class EditStudent extends React.Component {
    state = {
        user_id: '2',
        student_id: '',
    }

    componentDidMount() {
      fetch(`http://localhost:8000/school_api/user/${user_id}/students/`)
          .then(response => response.json())
          .then(data => {
              this.setState({student_id: data});
          });
  }
}
export default EditStudent