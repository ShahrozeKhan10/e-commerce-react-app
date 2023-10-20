import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = ({imag1,imag2,imag3}) => {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imag1}
          alt="First slide"
          height= "300"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imag2}
          alt="Second slide"
          height= "300"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imag3}
          alt="Third slide"
          height= "300"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
