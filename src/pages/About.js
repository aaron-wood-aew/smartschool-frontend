import React from 'react'
import MapViewer from '../components/googleMapsComponent/MapViewer'

const AboutPage = () => {
  return (
    <div>
      <div className="col-md-4 offset-md-4">
        <h1>This is the about page.</h1>
      </div>
      <div className="col-md-6 offset-md-3">
        <MapViewer />
      </div>
    </div>
  )
}

export default AboutPage;