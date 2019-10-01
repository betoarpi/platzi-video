import React from 'react';
import ConcertImg from '../assets/static/concert.jpg';

const CarouselItem = () => (
  <div className='carousel__item'>
    <img src={ConcertImg} alt='Concert' />
    <div className='carousel__item__details'>
      <div className='carousel__item__details__icons'>
        <i className='fa fa-play' aria-hidden='true'> </i>
        <i className='fa fa-plus' aria-hidden='true'> </i>
      </div>
      <h5>Título descriptivo</h5>
      <p>subtítulo del item</p>
    </div>
  </div>
);

export default CarouselItem;
