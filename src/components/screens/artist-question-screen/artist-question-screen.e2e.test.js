import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionAcreen from './artist-question-screen';

const questionMock = {
  "type": `artist`,
  "song": {
    "artist": `Quincas Moreira`,
    "src": `https://es31-server.appspot.com/guess-melody/static/music/Blue_Whale.mp3`
  },
  "answers": [
    {
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Quincas_Moreira.jpg`,
      "artist": `Quincas Moreira`
    },
    {
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Density_n_Time.jpg`,
      "artist": `Density & Time`
    },
    {
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Endless_Love.jpg`,
      "artist": `Endless Love`
    }
  ]
};

Enzyme.configure({adapter: new Adapter()});

it(`ArtistQuestionAcreen callback with params`, () => {
  const onAnswer = jest.fn();
  const screenIndex = 0;
  const screen = shallow(
      <ArtistQuestionAcreen
        question={questionMock}
        screenIndex={screenIndex}
        onAnswer={onAnswer}
      />);
  const answerForm = screen.find(`.game__artist`);
  answerForm.simulate(`change`);
  expect(onAnswer).toHaveBeenCalledWith(undefined);
});
