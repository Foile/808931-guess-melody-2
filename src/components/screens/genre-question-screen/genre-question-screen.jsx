import React from "react";
import PropTypes from 'prop-types';
import AudioPlayer from '../../audio-player/audio-player.jsx';
import GameMistakes from "../../game-mistakes/game-mistakes.jsx";

export default class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      activePlayer: -1,
    };
    this._answerHandler = props.onAnswer;

    this._ipnutChangeHandler = this._ipnutChangeHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  render() {
    const {answers, genre} = this.props.question;
    const {screenIndex} = this.props;
    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <div className="timer__value">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <GameMistakes mistakes={this.state.mistakes}></GameMistakes>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit = {this._formSubmitHandler}>
            {answers.map((answer, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <AudioPlayer id = {answer.id}
                    src = {answer.src}
                    isPlaying = {i === this.state.activePlayer}
                    onPlayButtonClick = {() => this.setState({
                      activePlayer: this.state.activePlayer === i ? -1 : i
                    })}
                  />
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }

  _ipnutChangeHandler(evt) {
    const answers = [...this.state.answers];
    if (evt.target.checked) {
      answers.push(evt.target.value);
    } else {
      const index = answers.indexOf(evt.target.value);
      answers.splice(index, 1);
    }
    this.setState({
      answers,
    });
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._answerHandler(this.state.answers);
  }

}
GenreQuestionScreen.propTypes = {
  type: PropTypes.string,
  question: PropTypes.shape({
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.string
    }))
  }).isRequired,
  screenIndex: PropTypes.number,
  onAnswer: PropTypes.func
};
