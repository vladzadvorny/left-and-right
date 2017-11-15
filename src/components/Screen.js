import React, { Component } from 'react';
import { connect } from 'react-redux';

class Screen extends Component {
  render() {
    const { error } = this.props;
    const componentClasses = ['screen'];

    if (error) {
      componentClasses.push('show');
    }

    return <div className={componentClasses.join(' ')} />;
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, null)(Screen);
