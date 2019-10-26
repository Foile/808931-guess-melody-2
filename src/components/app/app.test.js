import React from 'react';
import renderer from "react-test-renderer";
import App from './app';

const questions = [
  {
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
      }
    ]
  }];

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    questions={questions}
    errorCount={0}
    gameTime={0}
    onClick={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
