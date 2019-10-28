/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <section className='login'>
        <div className='login__container'>
          <h2 className='login__container__title'>Inicia Sesión</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <input
                name='email'
                type='email'
                placeholder='Correo electrónico'
                onChange={handleInput}
              />
              <input
                name='password'
                type='password'
                placeholder='Contraseña'
                onChange={handleInput}
              />
              <button className='btn' type='submit'>Iniciar Sesión</button>
            </fieldset>
            <div className='login__container__rememberme'>
              <label htmlFor='rememberme'>Recuérdame <input name='rememberme' type='checkbox' /></label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>

          <div className='login__container__social'>
            <ul>
              <li>
                <a href='/'><i className='fa fa-google' aria-hidden='true'> </i> Inicia Sesión con Google</a>
              </li>
              <li>
                <a href='/'><i className='fa fa-facebook-square' aria-hidden='true'> </i> Inicia Sesión con Facebook</a>
              </li>
            </ul>
          </div>

          <span className='login__container__registrate'>
            No tienes cuenta? <Link to='/register'>Regístrate</Link>
          </span>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
