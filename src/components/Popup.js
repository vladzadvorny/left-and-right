import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class Popup extends Component {
  render() {
    const { hideCancel, hideOk, translate } = this.props;
    return (
      <div className="popup">
        <div className="inner">
          <div className="content">
            <div className="text">{translate('popupText')}</div>
            <div className="buttons">
              <button onClick={hideCancel}>{translate('popupCancel')}</button>
              <button className="ok" onClick={hideOk}>
                {translate('popupOk')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
