import React from 'react';
import renderer from "react-test-renderer";
import Timer from './timer';

it(`Timer correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Timer time = {123} tick={jest.fn()} onTimeout={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
