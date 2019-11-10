const initialState = {
  step: -1,
  mistakes: 0
};
const isArtistAnswerCorrect = (answer, question) => answer.artist === question.song.artist;

const isGenreAnswerCorrect = (answer, question) => answer.every((it, i) => it === (question.answers[i].genre === question.genre));

const ActionCreator = {
  incrementStep: () => ({type: `INCREMENT_STEP`, payload: 1}),
  incrementMistake: (userAnswer, question, mistakes, maxMistakes) =>{
    let inAnswerCorrect = false;

    switch (question.type) {
      case `artist`: inAnswerCorrect = isArtistAnswerCorrect(userAnswer, question); break;
      case `genre`: inAnswerCorrect = isGenreAnswerCorrect(userAnswer, question); break;
    }
    if (!inAnswerCorrect && mistakes + 1 >= maxMistakes) {
      return {type: `RESET`};
    }
    return {type: `INCREMENT_MISTAKES`, payload: inAnswerCorrect ? 0 : 1};

  }
};

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {mistakes: state.mistakes + action.payload});
    case `INCREMENT_STEP`: return Object.assign({}, state, {step: state.step + action.payload});
    case `RESET`: return Object.assign({}, initialState);
  }
  return state;
};

export {
  reducer,
  ActionCreator
};
