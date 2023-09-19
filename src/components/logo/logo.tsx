import {Link} from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="game__back" to="/">
      <span className="visually-hidden">Play again</span>
      <img className="game__logo" src="img/melody-logo-ginger.png" alt="Guess the melody" />
    </Link>
  );
}

export default Logo;
