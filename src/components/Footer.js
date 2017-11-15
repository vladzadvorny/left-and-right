import React, { Component } from 'react';
import {
  setActiveLanguage,
  getLanguages,
  getActiveLanguage
} from 'react-localize-redux';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    const { languages, setLanguage, currentLanguage } = this.props;
    return (
      <div className="footer">
        <div className="left">
          <p>
            <a className="email" href="mailto:vladzadvorny@icloud.com">
              vladzadvorny@icloud.com
            </a>
            <a
              className="readme"
              href="https://github.com/vladzadvorny/left-and-right/blob/master/README.md"
              target="_blank"
            >
              README!
            </a>
          </p>
        </div>

        <div className="right">
          <div
            className="ya-share2"
            data-services="vkontakte,facebook,odnoklassniki,twitter,whatsapp"
            data-size="s"
          />
          <ul>
            {languages.map(language => (
              <li key={language.code}>
                {/* eslint-disable */}
                <span
                  className={language.code !== currentLanguage ? 'link' : null}
                  onClick={() => setLanguage(language.code)}
                >
                  {language.code}
                </span>
                {/* eslint-enable */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  languages: getLanguages(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});
const mapDispatchToProps = { setLanguage: setActiveLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
