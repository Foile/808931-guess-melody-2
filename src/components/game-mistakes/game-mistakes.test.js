
import React from 'react';
import renderer from "react-test-renderer";
import GameMistakes from './game-mistakes';

it(`ArtistQuestionAcreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GameMistakes mistakes = {4}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
