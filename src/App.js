import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Screen from './components/Screen';
import Sounds from './components/Sounds';

import { enableError, disableError, setNextDirection } from './actions';

const randomDirection = () => {
  if (Math.random() >= 0.5) {
    return 'left';
  }
  return 'right';
};

class App extends Component {
  componentWillReceiveProps(nextProps) {
    const { isStart, setNext, show, direction } = this.props;

    if (nextProps.isStart && isStart !== nextProps.isStart) {
      setNext(randomDirection());
    } else {
      /* eslint-disable */
      if (nextProps.isStart && direction.hash !== nextProps.direction.hash) {
        if (
          nextProps.direction.direction === nextProps.nextDirection.direction
        ) {
          setTimeout(() => {
            setNext(randomDirection());
          }, 900);
        } else {
          show();
          // setNext(nextProps.nextDirection.direction);
        }
      }
      /* eslint-enable */
    }
  }

  componentDidUpdate() {
    const { error, hide, setNext, nextDirection } = this.props;

    // disable error
    if (error) {
      setTimeout(() => {
        hide();
        setTimeout(() => {
          setNext(nextDirection.direction);
        }, 500);
      }, 200);
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
        <Screen />
        <Sounds />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  level: state.level,
  isStart: state.app,
  error: state.error,
  direction: state.direction,
  nextDirection: state.nextDirection
});

const mapDispatchToProps = {
  hide: disableError,
  show: enableError,
  setNext: setNextDirection
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
