import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from '../screens/welcome-screen/welcome-screen';
import GenreQuestionScreen from '../screens/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../screens/artist-question-screen/artist-question-screen';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";
import GameHeader from "../screens/game-header/game-header";

class App extends React.PureComponent {

  _getGameScreen(question, step) {
    const {
      onUserAnswer,
      mistakes,
      maxMistakes,
      timerTick,
      resetGame
    } = this.props;

    switch (question.type) {
      case `genre`: return <React.Fragment>
        <GameHeader time={this.state.time} tick={timerTick} onTimeout={resetGame} mistakes={this.state.mistakes}></GameHeader>
        <GenreQuestionScreen
          step={step}
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question,
              mistakes,
              maxMistakes
          )}
        /></React.Fragment>;

      case `artist`: return <React.Fragment>
        <GameHeader time={this.state.time} tick={timerTick} onTimeout={resetGame} mistakes={this.state.mistakes}></GameHeader>
        <ArtistQuestionScreen
          step={step}
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question,
              mistakes,
              maxMistakes
          )}
        /></React.Fragment>;

    }

    return null;
  }

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
    const currentQuestion = questions[step];
    return this._getGameScreen(currentQuestion, props);
  }

  constructor(props) {
    super(props);

    this.state = {
      step: -1,
      mistakes: 0,
      time: props.gameTime * 60
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
  time: PropTypes.number
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
