import React from 'react'
import RegisterForm from './registerPage.js'
import CarouselComponent from '../components/home/carouselComponent.js'

const HomePage = () => {
  return (
    <div>
      <RegisterForm/>
      <div>
        <CarouselComponent/>
      </div>
    </div>
  )
}

export default HomePage;