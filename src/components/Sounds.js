import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import { getActiveLanguage } from 'react-localize-redux';

import sounds from '../assets/sounds.json';

const path =
  process.env.NODE_ENV === 'production'
    ? '/left-and-right/public/'
    : '/public/';

class Sounds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: sounds.error,
      position: 0,
      volume: 100,
      playStatus: Sound.status.STOPPED
    };
  }

  componentWillReceiveProps(nextProps) {
    const { direction, currentLanguage, level } = this.props;
    const channels = level === 4 ? 'two' : 'one';

    // this.setState({ playStatus: Sound.status.STOPPED });

    if (nextProps.error) {
      this.setState({
        file: sounds.error,
        playStatus: Sound.status.PLAYING
      });
    }
    if (
      nextProps.direction.direction === 'left' &&
      nextProps.direction.hash !== direction.hash
    ) {
      this.setState({
        file: sounds[currentLanguage][channels].left,
        playStatus: Sound.status.PLAYING
      });
    }
    if (
      nextProps.direction.direction === 'right' &&
      nextProps.direction.hash !== direction.hash
    ) {
      this.setState({
        file: sounds[currentLanguage][channels].right,
        playStatus: Sound.status.PLAYING
      });
    }
  }

  render() {
    const { file, playStatus, position, volume } = this.state;
    return (
      <Sound
        url={path + file}
        playStatus={playStatus}
        playFromPosition={position}
        volume={volume}
        onFinishedPlaying={() =>
          this.setState({ playStatus: Sound.status.STOPPED })}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  direction: state.app ? state.nextDirection : state.direction,
  currentLanguage: getActiveLanguage(state.locale).code,
  level: state.level
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sounds);
