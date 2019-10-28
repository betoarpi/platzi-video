import React from 'react';
import '../assets/styles/components/Main.scss';

const Main = ({ children }) => (
  <main className='main'>
    <section className='main__container'>
      {children}
    </section>
  </main>
);

export default Main;
