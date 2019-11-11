import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SECONDS_IN_MINUTE = 60;

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {time} = this.props;
    let min = Math.floor(time / SECONDS_IN_MINUTE);
    min = (min < 10) ? `0${min}` : min;
    let sec = time - min * SECONDS_IN_MINUTE;
    sec = (sec < 10) ? `0${sec}` : sec;
    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{min}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{sec}</span>
      </div>
    );
  }

  _tick() {
    const {time} = this.props;
    if (time - 1 === 0) {
      this.props.onTimeout();
    }
    this.props.tick();
  }
  componentDidMount() {
    this.id = setInterval(this._tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }
}

Timer.propTypes = {
  time: PropTypes.number,
  tick: PropTypes.func.isRequired,
  onTimeout: PropTypes.func.isRequired,
};
