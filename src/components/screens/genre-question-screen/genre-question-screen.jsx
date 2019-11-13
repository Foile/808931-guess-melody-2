import React from "react";
import PropTypes from 'prop-types';
import AudioPlayer from '../../audio-player/audio-player.jsx';

export default class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      activePlayer: -1,
    };
    this._answerHandler = props.onAnswer;

    this._inputChangeHandler = this._inputChangeHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  render() {
    const {answers, genre} = this.props.question;
    const {screenIndex} = this.props;
    return (
      <React.Fragment>
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
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`${answer.genre}`} id={`answer-${i}`} onChange={this._inputChangeHandler}/>
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </React.Fragment>
    );
  }

  _inputChangeHandler(evt) {
    const answers = [...this.state.answers];
    if (evt.target.checked) {
      answers.push({genre: evt.target.value});
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
