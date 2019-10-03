/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../assets/styles/components/Login.scss';

const Register = () => (
  <div className='App'>
    <Header />
    <Main>
      <section className='login'>
        <div className='login__container'>
          <h2 className='login__container__title'>Registro</h2>
          <form>
            <fieldset>
              <input type='text' placeholder='Nombre' />
              <input type='email' placeholder='Correo electrónico' />
              <input type='password' placeholder='Contraseña' />
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

          <span className='login__container__registrate'>Ya tengo una cuenta. <a href='/'>Iniciar Sesión</a></span>
        </div>
      </section>
    </Main>
    <Footer />
  </div>
);

export default Register;
