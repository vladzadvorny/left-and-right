import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialize, addTranslation } from 'react-localize-redux';
import { AppContainer } from 'react-hot-loader';
import getLocale from 'browser-locale';

import './style.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import globalTranslation from './assets/global.json';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const languages = ['en', 'ru'];
const locale = getLocale()
  .split('-')[0]
  .toLowerCase();
store.dispatch(
  initialize(languages, {
    defaultLanguage: languages.indexOf(locale) === -1 ? languages[0] : locale
  })
);
store.dispatch(addTranslation(globalTranslation));

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}

// registerServiceWorker();
