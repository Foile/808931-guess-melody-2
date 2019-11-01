import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

it(`AudioPlayer correctly renders after relaunch`, () => {
  const props = {
    isPlaying: false,
    onPlayButtonClick: jest.fn(),
    src: ``,
  };

  function createNodeMock() {
    return {
      src: ``,
    };
  }

  const tree = renderer
    .create(<AudioPlayer {...props}/>, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
