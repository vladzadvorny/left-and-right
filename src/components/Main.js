import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import { setDirection as direction } from '../actions';

class Main extends Component {
  render() {
    const { nextDirection, level, setDirection, translate } = this.props;
    const leftClass = ['left'];
    const rightClass = ['right'];

    if (level === 1 && nextDirection === 'left') {
      leftClass.push('selected');
    }
    if (level === 1 && nextDirection === 'right') {
      rightClass.push('selected');
    }

    /* eslint-disable */
    return (
      <div className="main">
        <div
          role="button"
          className={leftClass.join(' ')}
          onClick={() => setDirection('left')}
        >
          <p>{level === 1 || level === 2 ? translate('left') : null}</p>
        </div>
        <div
          className={rightClass.join(' ')}
          role="button"
          onClick={() => setDirection('right')}
        >
          <p>{level === 1 || level === 2 ? translate('right') : null}</p>
        </div>
      </div>
    );
    /* eslint-enable */
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  nextDirection: state.nextDirection.direction,
  level: state.level
});

const mapDispatchToProps = {
  setDirection: direction
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
