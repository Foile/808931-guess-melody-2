
import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';
import questions from './mocks/questions';
import settings from './mocks/settings';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./reducer";

const init = () => {

  const store = createStore(reducer);
  ReactDOM.render(<Provider store={store}>
    <App
      maxMistakes={settings.errorCount}
      gameTime={settings.gameTime}
      questions={questions}
    /></Provider>,
  document.querySelector(`#root`)
  );
};

init(questions);
