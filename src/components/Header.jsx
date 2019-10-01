import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/platzi-video_logo.svg';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <img src={logo} alt='Platzi Video - Logo' />
    </div>

    <div className='header__login'>
      <div className='header__login__container'>
        <i className='fa fa-user-circle header__login__icon' aria-hidden='true'> </i>
        <span>Profile</span>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
