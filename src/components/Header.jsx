import React from 'react';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <img src='./src/img/platzi-video_logo.svg' alt='Platzi Video - Logo' />
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
