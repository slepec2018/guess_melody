import { Helmet } from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {resetGame} from '../../store/game-process/game-process';
import {AppRoute} from '../../const';

function GameOverScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className="result">
      <Helmet>
        <title>Guess the melody. What a pity!</title>
      </Helmet>
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Guess the melody" width="186" height="83" />
      </div>
      <h2 className="result__title">What a pity!</h2>
      <p className="result__total result__total--fail">You've run out of attempts. Never mind, better luck next time!</p>
      <button
        onClick={() => {
          dispatch(resetGame());
          navigate(AppRoute.Game);
        }}
        className="replay"
        type="button"
      >
        To try one more time
      </button>
    </section>
  );
}

export default GameOverScreen;
