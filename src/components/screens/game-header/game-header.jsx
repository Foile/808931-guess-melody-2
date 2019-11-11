import React from "react";
import PropTypes from 'prop-types';
import Timer from "../../../components/timer/timer";
import GameMistakes from "../../game-mistakes/game-mistakes";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {time, tick, onTimeout, mistakes} = this.props;
    return <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>
      <Timer time={time} tick ={tick} onTimeout={onTimeout}></Timer>
      <GameMistakes mistakes={mistakes}></GameMistakes>
    </header>;
  }
}
Header.propTypes = {
  time: PropTypes.number.isRequired,
  tick: PropTypes.func.isRequired,
  onTimeout: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired

};

export default Header;
