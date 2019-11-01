import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

const questionMock = {
  "type": `genre`,
  "genre": `reggae`,
  "answers": [
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Addis_Ababa.mp3`,
      "genre": `reggae`
    }
  ]
};

Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionScreen callback with params`, () => {
  const onAnswer = jest.fn();
  const screen = shallow(
      <GenreQuestionScreen
        question={questionMock}
        screenIndex={0}
        onAnswer={onAnswer}
      />);
  const answerButton = screen.find(`.game__tracks`);
  answerButton.simulate(`submit`, {
    preventDefault: () => {
    },
    target: {
      value: `answer-0`
    }
  });
  expect(onAnswer).toHaveBeenCalledWith([]);

});
