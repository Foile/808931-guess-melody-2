
import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';
import questions from './mocks/questions';
import settings from './mocks/settings';

const init = () => {


  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
