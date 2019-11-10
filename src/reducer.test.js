import {reducer} from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(reducer(undefined, {})).toEqual({step: -1, mistakes: 0}));
  it(`Reducer increments Mistakes`, () => expect(reducer({step: -1, mistakes: 0}, {type: `INCREMENT_MISTAKES`, payload: 1})).toEqual({step: -1, mistakes: 1}));
});
