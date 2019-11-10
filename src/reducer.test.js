import {reducer, ActionCreator} from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(reducer(undefined, {})).toEqual({step: -1, mistakes: 0}));
  it(`Reducer increments mistakes`, () => expect(reducer({step: -1, mistakes: 0}, {type: `INCREMENT_MISTAKES`, payload: 1})).toEqual({step: -1, mistakes: 1}));
  it(`Reducer increments step`, () => expect(reducer({step: -1, mistakes: 0}, {type: `INCREMENT_STEP`, payload: 1})).toEqual({step: 0, mistakes: 0}));
  it(`Reducer reset`, () => expect(reducer({step: 2, mistakes: 0}, {type: `RESET`, payload: 1})).toEqual({step: -1, mistakes: 0}));
});

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for increment 0 mistakes`, () => expect(ActionCreator.incrementMistake(
      {artist: `correct`},
      {
        type: `artist`, song: {
          artist: `correct`,
          answers: [
            {
              artist: `correct`
            },
            {
              artist: `incorrect`
            },
          ]}
      }, 0, 5)).toEqual({type: `INCREMENT_MISTAKES`, payload: 0}));

  it(`ActionCreator for increment 1 mistakes`, () => expect(ActionCreator.incrementMistake(
      {artist: `incorrect`},
      {
        type: `artist`, song: {
          artist: `correct`,
          answers: [
            {
              artist: `correct`
            },
            {
              artist: `incorrect`
            },
          ]}
      }, 0, 5)).toEqual({type: `INCREMENT_MISTAKES`, payload: 1}));
  it(`ActionCreator for increments step`, () => expect(ActionCreator.incrementStep()).toEqual({type: `INCREMENT_STEP`, payload: 1}));

  it(`ActionCreator for reset`, () => expect(ActionCreator.incrementMistake(
      {artist: `incorrect`},
      {
        type: `artist`, song: {
          artist: `correct`,
          answers: [
            {
              artist: `correct`
            },
            {
              artist: `incorrect`
            },
          ]}
      }, 0, 1)).toEqual({type: `RESET`}));
});
