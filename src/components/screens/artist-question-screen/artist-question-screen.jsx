import React from "react";
import PropTypes from 'prop-types';
import AudioPlayer from '../../audio-player/audio-player.jsx';

export default class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {question, onAnswer, screenIndex} = this.props;
    const {isPlaying} = this.state;
    const {answers, song} = question;
    return (
      <React.Fragment>
        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                src = {song.src}
                isPlaying = {isPlaying}
                onPlayButtonClick = {() => this.setState({isPlaying: !isPlaying})}
              />
            </div>
          </div>

          <form className="game__artist" onChange={(evt) => {
            evt.preventDefault();
            onAnswer({artist: evt.target.value});
          }}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={`${it.artist}`} id={`answer-${i}`} />
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img className="artist__picture" src={it.picture} alt={it.artist} />
                    {it.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </React.Fragment>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    song: PropTypes.shape({
      src: PropTypes.string,
      artist: PropTypes.string
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string,
      artist: PropTypes.string
    }))
  }),
  screenIndex: PropTypes.number,
  onAnswer: PropTypes.func
};
