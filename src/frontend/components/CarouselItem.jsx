import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel__item'>
      <img src={cover} alt={title} />
      <div className='carousel__item__details'>
        <div className='carousel__item__details__icons'>
          <Link to={`/player/${id}`}>
            <i className='fa fa-play' aria-hidden='true'> </i>
          </Link>
          {isList ?
            <i className='fa fa-trash' aria-hidden='true' onClick={() => handleDeleteFavorite(id)}> </i> :
            <i className='fa fa-plus' aria-hidden='true' onClick={handleSetFavorite}> </i>}
        </div>
        <h5>{title}</h5>
        <p>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
