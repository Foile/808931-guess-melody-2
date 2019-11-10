
import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';
import questions from './mocks/questions';
import settings from './mocks/settings';
import {createStore} from 'redux';
import Provider from 'react-redux';

const init = () => {

  const store = createStore();
  ReactDOM.render(<Provider store={store}>
    <App
      errorCount={settings.errorCount}
      gameTime={settings.gameTime}
      questions={questions}
    /></Provider>,
  document.querySelector(`#root`)
  );
};

init();
