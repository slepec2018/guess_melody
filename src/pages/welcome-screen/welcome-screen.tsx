import {useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {useAppDispatch} from '../../hooks';
import {resetGame} from '../../store/game-process/game-process';
import {AppRoute} from '../../const';

type WelcomeScreenProps = {
  errorsCount: number;
}

function WelcomeScreen({ errorsCount }: WelcomeScreenProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <section className="welcome">
      <Helmet>
        <title>Guess the melody. Rules of the game</title>
      </Helmet>
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <button
        className="welcome__button"
        onClick={() => {
          dispatch(resetGame());
          navigate(AppRoute.Game);
        }}
      >
        <span className="visually-hidden">
          Начать игру
        </span>
      </button>
      <h2 className="welcome__rules-title">Rules of the game</h2>
      <p className="welcome__text">Rules of the game:</p>
      <ul className="welcome__rules-list">
        <li>All questions must be answered.</li>
        <li>It is possible to make {errorsCount} errors.</li>
      </ul>
      <p className="welcome__text">Good luck!</p>
    </section>
  );
}

export default WelcomeScreen;
