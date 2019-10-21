import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';
Enzyme.configure({adapter: new Adapter()});

it(`startButton correct run afrer click`, () => {
  const onClick = jest.fn();
  const screen = shallow(
      <WelcomeScreen
        mistakes={0}
        minutes={0}
        onClick={onClick}
      />);
  const startButton = screen.find(`.welcome__button`);
  startButton.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
