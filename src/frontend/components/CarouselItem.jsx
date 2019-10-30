import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus, FaPlay } from 'react-icons/fa';
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
            <FaPlay />
          </Link>
          {isList ?
            <FaTrashAlt onClick={() => handleDeleteFavorite(id)} /> :
            <FaPlus onClick={handleSetFavorite} />}
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
