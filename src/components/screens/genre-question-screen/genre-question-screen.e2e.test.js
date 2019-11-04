import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

const questionMock = {
  "type": `genre`,
  "genre": `reggae`,
  "answers": [
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
    }
  });
  expect(onAnswer).toHaveBeenCalledWith([]);

});
