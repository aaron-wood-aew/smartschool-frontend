import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapViewer extends Component {
  state={
    user : ''
  }
  render() {

  const style = {
    width: '800px',
    height: '500px'
    }

  return (
    <div>
     <Map 
      google={this.props.google} 
      zoom={15}
      initialCenter={{
      lat: 35.5496939,
      lng: -120.7060049
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