import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from '../screens/welcome-screen/welcome-screen';
import GenreQuestionScreen from '../screens/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../screens/artist-question-screen/artist-question-screen';

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        minutes={gameTime}
        mistakes={errorCount}
        onClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {question: !isEnd ? nextIndex : -1};
      });
    });
  }
}

App.propTypes = {errorCount: PropTypes.number, gameTime: PropTypes.number, questions: PropTypes.array};

export default App;
