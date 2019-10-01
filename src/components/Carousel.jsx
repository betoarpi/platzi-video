import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children, title }) => (
  <div id='my-list' className='carousel'>
    <h3 className='carousel__title'>{title}</h3>
    {children}
  </div>
);

export default Carousel;
