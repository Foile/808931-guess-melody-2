import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer is correctly handle click on play button`, () => {
  const playButtonClickHandler = jest.fn();

  const audioPlayer = mount(<AudioPlayer
    isPlaying = {false}
    onPlayButtonClick = {playButtonClickHandler}
    src = {``}
  />);

  const playButton = audioPlayer.find(`.track__button`);
  audioPlayer.setState({
    isLoading: false,
  });

  expect(audioPlayer.state().isPlaying).toBe(false);
  playButton.simulate(`click`);

  expect(playButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(audioPlayer.state().isPlaying).toBe(true);

  playButton.simulate(`click`);
  expect(playButtonClickHandler).toHaveBeenCalledTimes(2);
  expect(audioPlayer.state().isPlaying).toBe(false);
});
