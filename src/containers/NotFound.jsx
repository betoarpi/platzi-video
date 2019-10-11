/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <section className='error404'>
      <div className='error404__container'>
        <h1>40<span>4</span></h1>
        <p>La página que buscas no fue encontrada.</p>
      </div>
    </section>
    <div className='matrix'> </div>
    <div className='matrix matrix--dos'> </div>
    <div className='matrix matrix--tres'> </div>
  </>
);

export default NotFound;
