/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselContainer from '../components/CarouselContainer';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {

  return (
    <>
      <Search isHome />

      {myList.length > 0 &&
        (
          <Carousel title='Mi Lista'>
            <CarouselContainer>
              {myList.map((item) => <CarouselItem key={item.id} {...item} isList />)}
            </CarouselContainer>
          </Carousel>
        )}

      <Carousel title='Tendencias'>
        <CarouselContainer>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </CarouselContainer>
      </Carousel>

      <Carousel title='Originales de Platzi Video'>
        <CarouselContainer>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </CarouselContainer>
      </Carousel>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
