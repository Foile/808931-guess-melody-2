const initialState = {
  step: -1,
  mistakes: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {mistakes: state.mistakes + action.payload});
    case `INCREMENT_STEP`: return Object.assign({}, state, {step: state.step + action.payload});
    case `RESET`: return Object.assign({}, initialState);
  }
  return state;
};

// const isActorAnswerCorrect = (answer) =>


export {reducer};
