import React, {Component } from 'react'
import MapViewer from '../components/googleMapsComponent/MapViewer'
import SchoolAPI from '../api/SchoolAPI';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID : '',
      address_1 : '',
      address_2 : '',
      city : '',
      state : '',
      zip : '',
    }
  }


  handleClick(event){
    event.preventDefault()
    const userObject = {
      address1: event.target.elements[0].value,
      address2: event.target.elements[1].value,
      city: event.target.elements[2].value,
      state: event.target.elements[3].value,
      zip: event.target.elements[4].value,
    }
    SchoolAPI.fetchUserByID(userObject)
      .then((response) => { this.setState({ userID: "Current User" })
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <MapViewer />
        </div>
      </div>
    )
  }
}

export default Dashboard;