import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/platzi-video_logo.svg';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='Platzi Video - Logo' />
      </Link>

      <div className='header__login'>
        <div className='header__login__container'>
          {hasUser ?
            <img className='header__login__gravatar' src={gravatar(user.email)} alt={user.email} /> :
            <i className='fa fa-user-circle header__login__icon' aria-hidden='true'> </i>}
          <span>Profile</span>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}

          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> :
            <li><Link to='/login'>Iniciar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
