import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import CarouselComponent from '../components/carouselComponent/CarouselComponent.js'
import { Link } from 'react-router-dom'

const HomePage = () => {

  if (localStorage.getItem('isLoggedIn')) {
    return <Redirect to= '/dashboard' />
  }

  return (
    <div>
      <Link to="/register">
        <div className="col-md-4 offset-md-4" >
          New Here?  Click to Register
        </div>
        <div className="col-md-8 offset-md-2">
          <img src={require('../smartschool_logo.jpg')} alt='Smart School Logo'/>
        </div>
      </Link>  
      <div>
          <CarouselComponent/>
      </div>
    </div>
  )
}


export default HomePage;
  // class HomePage extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isLoggedIn: false
  //     }
  //   }
  
    
    
  //   render() {