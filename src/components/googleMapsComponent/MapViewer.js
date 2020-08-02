import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import SchoolAPI from '../../api/SchoolAPI';
import Geocode from 'react-geocode';

class MapViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address1:'218+Shawnee+Ct.',
      address2:'',
      city:'OFallon',
      state:'IL',
      zip:'62269',
      lat:'',
      lng:'',
    }
  }
  
  componentDidMount() {
    Geocode.setApiKey('AIzaSyAadcsejl6UCXVjbXT4KP_0LQcmk3z7bOo')
    let formattedAddress = `${this.state.address1}+${this.state.city}+${this.state.state}+${this.state.zip}`
    Geocode.fromAddress(formattedAddress).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        let latitude = lat.toString()
        let longitude = lng.toString()
        this.setState({ lat:latitude, lng:longitude })
      }
    )
  }
  
  render() {
    const style = {
      width: '800px',
      height: '500px'
      }
    if (this.state.lat.length == 0) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
      <Map 
        google={this.props.google} 
        zoom={15}
        initialCenter={{
        lat: this.state.lat,
        lng: this.state.lng
        }}
        style={style}>
        <Marker />
        </Map>
      </div>
      )
  }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyAadcsejl6UCXVjbXT4KP_0LQcmk3z7bOo')
})(MapViewer);