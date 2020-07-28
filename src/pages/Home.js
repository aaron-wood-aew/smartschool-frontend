import React from 'react'
import CarouselComponent from '../components/carouselComponent/CarouselComponent.js'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to="/register">
      <div className="col-md-8 offset-md-2">
        <img src={require('../smartschool_logo.jpg')}/>
      </div>
      </Link>

      <div>
          <CarouselComponent/>
      </div>
    </div>
  )
}

export default HomePage;