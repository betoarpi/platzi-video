import React from 'react';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel__item'>
    <img src={cover} alt={title} />
    <div className='carousel__item__details'>
      <div className='carousel__item__details__icons'>
        <i className='fa fa-play' aria-hidden='true'> </i>
        <i className='fa fa-plus' aria-hidden='true'> </i>
      </div>
      <h5>{title}</h5>
      <p>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;
