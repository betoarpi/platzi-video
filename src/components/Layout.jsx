import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
);

export default Layout;
