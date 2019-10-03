/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselContainer from '../components/CarouselContainer';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState/';

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Main>
        <Search />

        {initialState.mylist.length > 0 &&
          (
            <Carousel title='Mi Lista'>
              <CarouselContainer>
                {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
              </CarouselContainer>
            </Carousel>
          )}

        <Carousel title='Tendencias'>
          <CarouselContainer>
            {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </CarouselContainer>
        </Carousel>

        <Carousel title='Originales de Platzi Video'>
          <CarouselContainer>
            {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </CarouselContainer>
        </Carousel>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
