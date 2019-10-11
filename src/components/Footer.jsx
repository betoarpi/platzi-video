import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <Link to='/'>
      Terminos de uso
    </Link>
    <Link to='/'>
      Política de Privacidad
    </Link>
    <Link to='/'>
      Centro de Ayuda
    </Link>
  </footer>
);

export default Footer;
