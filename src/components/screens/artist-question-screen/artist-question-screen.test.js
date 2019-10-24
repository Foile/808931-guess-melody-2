
import React from 'react';
import renderer from "react-test-renderer";
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


it(`ArtistQuestionAcreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<ArtistQuestionAcreen
    question={questionMock}
    screenIndex={0}
    onAnswer={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
