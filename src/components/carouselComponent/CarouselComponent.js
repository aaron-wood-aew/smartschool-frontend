import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function CarouselComponent () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img-responsive center-block"
          width={750}
          height={350}
          src={require("../../children-having-fun-at-school.jpg")}
          alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-responsive center-block"
          width={750}
          height={350}
          src={require("../../Child-PNG-Image.png")}
          alt="Third slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-responsive center-block"
          width={750}
          height={350}
          src={require("../../teacherchildren.png")}
          alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent