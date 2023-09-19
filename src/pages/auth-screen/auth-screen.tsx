import { Helmet } from 'react-helmet-async';
import {useRef, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AppRoute} from '../../const';

function AuthScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <section className="login">
      <Helmet>
        <title>Guess the melody. You are a true music lover!</title>
      </Helmet>
      <div className="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="login__title">You are a true music lover!</h2>
      <p className="login__text">Want to know your result? Introduce yourself!</p>
      <form
        className="login__form"
        action=""
        onSubmit={handleSubmit}
      >
        <p className="login__field">
          <label className="login__label" htmlFor="name">Login</label>
          <input
            ref={loginRef}
            className="login__input"
            type="text"
            name="name"
            id="name"
            data-testid="loginElement"
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            className="login__input"
            type="text"
            name="password"
            id="password"
            data-testid="passwordElement"
          />
          <span className="login__error">Incorrect password</span>
        </p>
        <button className="login__button button" type="submit">Login</button>
      </form>
      <button
        onClick={() => navigate(AppRoute.Game)}
        className="replay"
        type="button"
      >
        Play again
      </button>
    </section>
  );
}

export default AuthScreen;
