import React from 'react';
import PropTypes from 'prop-types';

const GameMistakes = ({mistakes}) => {
  return (
    <div className="game__mistakes">
      {new Array(mistakes).fill(``).map((it, i) => <div className="wrong" key={`mistake-${i}`}></div>)}
    </div>
  );
};
GameMistakes.propTypes = {
  mistakes: PropTypes.number,
};
export default GameMistakes;
