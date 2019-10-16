import React from "react";
import {number} from 'prop-types';
import WelcomeScreen from '../welcome-screen';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {errorCount: number, gameTime: number};

export default App;
