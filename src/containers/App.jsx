import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselContainer from '../components/CarouselContainer';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Main>
      <Search />
      <Carousel title='Mi Lista'>
        <CarouselContainer>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </CarouselContainer>
      </Carousel>

      <Carousel title='Tendencias'>
        <CarouselContainer>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </CarouselContainer>
      </Carousel>

      <Carousel title='Originales de Platzi Video'>
        <CarouselContainer>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </CarouselContainer>
      </Carousel>
    </Main>
    <Footer />
  </div>
);

export default App;
