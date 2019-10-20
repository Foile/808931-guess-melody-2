import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from '../screens/welcome-screen';

const App = (props) => {
  const {gameTime, errorCount} = props;

  const onClick = () => {};
  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onClick={onClick}
  />;
};

App.propTypes = {errorCount: PropTypes.number, gameTime: PropTypes.number};

export default App;
