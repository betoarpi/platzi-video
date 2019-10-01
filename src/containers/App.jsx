/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselContainer from '../components/CarouselContainer';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Main>
        <Search />

        {videos.mylist.length > 0 &&
          (
            <Carousel title='Mi Lista'>
              <CarouselContainer>
                <CarouselItem />
              </CarouselContainer>
            </Carousel>
          )}

        <Carousel title='Tendencias'>
          <CarouselContainer>
            {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </CarouselContainer>
        </Carousel>

        <Carousel title='Originales de Platzi Video'>
          <CarouselContainer>
            {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </CarouselContainer>
        </Carousel>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
