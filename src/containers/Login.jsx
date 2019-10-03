/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <div className='App'>
    <Header />
    <Main>
      <section className='login'>
        <div className='login__container'>
          <h2 className='login__container__title'>Inicia Sesión</h2>
          <form>
            <fieldset>
              <input type='email' placeholder='Correo electrónico' />
              <input type='password' placeholder='Contraseña' />
              <button className='btn' type='submit'>Iniciar Sesión</button>
            </fieldset>
            <div className='login__container__rememberme'>
              <label htmlFor='rememberme'>
                Recuérdame
                <input name='rememberme' type='checkbox' />
              </label>
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

          <span className='login__container__registrate'>No tienes cuenta? <a href='/'>Regístrate</a></span>
        </div>
      </section>
    </Main>
    <Footer />
  </div>
);

export default Login;
