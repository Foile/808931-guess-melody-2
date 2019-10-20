import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen';
Enzyme.configure({adapter: new Adapter()});

it(`startButton correct run afrer click`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    mistakes={0}
    minutes={0}
    onClick={clickHandler}
  />);
  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
