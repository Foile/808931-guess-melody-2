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
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Azure.mp3`,
      "genre": `electronic`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Whaling_City.mp3`,
      "genre": `country`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Skanada.mp3`,
      "genre": `reggae`
    }
  ]
};

Enzyme.configure({adapter: new Adapter()});

it(`startButton correct run afrer click`, () => {
  const onClick = jest.fn();
  const screen = shallow(
      <GenreQuestionScreen
        question={questionMock}
        screenIndex={0}
        onAnswer={onClick}
      />);
  const answerButton = screen.find(`.game__tracks`);
  answerButton.simulate(`submit`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
