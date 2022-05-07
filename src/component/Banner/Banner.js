import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/bannerImg/image1.webp'
import img2 from '../../images/bannerImg/image2.webp'
import img3 from '../../images/bannerImg/image3.webp'

const Banner = () => {
    return (
        <div className='container'>
            <Carousel variant="dark">
  <Carousel.Item className='opacity-75'>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption >
  <h1 className='fs-1 text-light '>Maximize your warehouse <span className='fs-1 fw-bolder text-primary'>efficiency</span></h1>
  <p className='text-light fs-2'>Nexus inventory management makes our life easier to track our product more accurately</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='opacity-75'>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption >
  <p className='fs-1 text-light '>Maximize your warehouse <span className='fs-1 fw-bolder text-primary'>efficiency</span></p>
  <p className='text-light fs-2'>Nexus inventory management makes our life easier to track our product more accurately</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='opacity-75'>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
 <Carousel.Caption>
  <p className='fs-1 text-light'>Maximize your warehouse <span className='fs-1 fw-bolder text-primary'>efficiency</span></p>
  <p className='text-light fs-2'>Nexus inventory management makes our life easier to track our product more accurately</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;