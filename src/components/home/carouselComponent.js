import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function CarouselComponent () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img-responsive center-block"
          width={800}
          height={400}
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-responsive center-block"
          width={800}
          height={400}
          src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-responsive center-block"
          width={800}
          height={400}
          src="https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent