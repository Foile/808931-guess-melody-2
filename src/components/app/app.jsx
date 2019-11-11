import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from '../screens/welcome-screen/welcome-screen';
import GenreQuestionScreen from '../screens/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../screens/artist-question-screen/artist-question-screen';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";
import GameMistakes from "../game-mistakes/game-mistakes";


class App extends React.PureComponent {
  _getScreen(step, props) {
    const {questions} = props;
    if (!questions[step]) {
      const {
        gameTime,
        maxMistakes,
        onWelcomeScreenClick
      } = props;

      return <WelcomeScreen
        minutes={gameTime}
        mistakes={maxMistakes}
        onClick={onWelcomeScreenClick}
      />;
    }

    const {
      onUserAnswer,
      mistakes,
      maxMistakes
    } = this.props;

    const currentQuestion = questions[step];

    switch (currentQuestion.type) {
      case `genre`: return <React.Fragment>
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <div className="timer__value">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>
          <GameMistakes mistakes={this.state.mistakes}></GameMistakes>
        </header><GenreQuestionScreen
          step={step}
          question={currentQuestion}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              currentQuestion,
              mistakes,
              maxMistakes
          )}
        /></React.Fragment>;

      case `artist`: return <React.Fragment>
        <header className="game__header">
          <a className="game__back" href="#">
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
        <ArtistQuestionScreen
          step={step}
          question={currentQuestion}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              currentQuestion,
              mistakes,
              maxMistakes
          )}
        /></React.Fragment>;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  render() {
    const {
      step,
      questions,
      resetGame
    } = this.props;

    if (step >= questions.length) {
      resetGame();
      return null;
    }

    return <section className={questions[step] ? `game game--${questions[step].type}` : `welcome`}>
      {this._getScreen(step, this.props)}
    </section>;
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.object
  }).isRequired
  ),
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  timerTick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(userAnswer,
        question,
        mistakes,
        maxMistakes));
  },
  resetGame: () => dispatch(ActionCreator.reset()),
  timerTick: () => dispatch(ActionCreator.timerTick()),
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
