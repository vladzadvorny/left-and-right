import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import MdLooksOne from 'react-icons/lib/md/looks-one';
import MdLooksTwo from 'react-icons/lib/md/looks-two';
import MdLooks3 from 'react-icons/lib/md/looks-3';
import MdLooks4 from 'react-icons/lib/md/looks-4';
import MdPauseCircleFilled from 'react-icons/lib/md/pause-circle-filled';
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled';

import { changeLevel, appStart, appStop } from '../actions';
import Popup from './Popup';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      popup: false,
      time: 60 * 15
    };
  }

  timer(start) {
    if (start) {
      this.t = setInterval(() => {
        if (this.state.time > 1) {
          this.setState({ time: this.state.time - 1 });
        } else {
          this.props.stop();
          this.timer(false);
          alert(this.props.translate('goodJob'));
        }
      }, 1000);
    } else {
      clearInterval(this.t);
      this.setState({ time: 15 * 60 });
    }
  }

  newLevel(level) {
    this.props.stop();
    this.timer(false);
    this.props.change(level);
  }

  showPopup() {
    this.setState({ popup: true });
  }

  hidePopup(action) {
    const { start } = this.props;
    if (action === 'ok') {
      start();
      this.timer(true);
    }

    this.setState({ popup: false });
  }

  renderAppButton() {
    const { isStart, stop } = this.props;

    if (isStart) {
      return (
        <MdPauseCircleFilled
          onClick={() => {
            stop();
            this.timer(false);
          }}
          className="active"
        />
      );
    }
    return <MdPlayCircleFilled onClick={() => this.showPopup()} />;
  }

  render() {
    const { translate, level } = this.props;
    const { time } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
      <div className="header">
        {time === 900 ? (
          <div className="logo">
            Left <span>&</span> Right
          </div>
        ) : (
          <div className="timer">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
        <div className="right">
          <div className="levels">
            <p>{translate('chooseLevel')}:</p>
            <MdLooksOne
              className={level === 1 ? 'active' : null}
              onClick={() => this.newLevel(1)}
            />
            <MdLooksTwo
              className={level === 2 ? 'active' : null}
              onClick={() => this.newLevel(2)}
            />
            <MdLooks3
              className={level === 3 ? 'active' : null}
              onClick={() => this.newLevel(3)}
            />
            <MdLooks4
              className={level === 4 ? 'active' : null}
              onClick={() => this.newLevel(4)}
            />
          </div>

          <div className="start">
            <p>{translate('startIt')}:</p>
            {this.renderAppButton()}
          </div>
        </div>
        {this.state.popup ? (
          <Popup
            hideOk={() => this.hidePopup('ok')}
            hideCancel={() => this.hidePopup('cancel')}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  level: state.level,
  translate: getTranslate(state.locale),
  isStart: state.app
});

const mapDispatchToProps = {
  change: changeLevel,
  start: appStart,
  stop: appStop
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
