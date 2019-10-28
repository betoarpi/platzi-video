/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <section className='login'>
        <div className='login__container'>
          <h2 className='login__container__title'>Registro</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <input
                name='name'
                type='text'
                placeholder='Nombre'
                onChange={handleInput}
              />
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
              <button className='btn' type='submit'>Registrarme</button>
            </fieldset>
          </form>

          <div className='login__container__social'>
            <ul>
              <li>
                <a href='/'><i className='fa fa-google' aria-hidden='true'> </i> Regístrate con Google</a>
              </li>
              <li>
                <a href='/'><i className='fa fa-facebook-square' aria-hidden='true'> </i> Regístrate con Facebook</a>
              </li>
            </ul>
          </div>

          <span className='login__container__registrate'>
            Ya tengo una cuenta. <Link to='/login'>Iniciar Sesión</Link>
          </span>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
