import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';

import level from './level';
import error from './error';
import direction from './direction';
import nextDirection from './nextDirection';
import app from './app';

export default combineReducers({
  level,
  locale,
  error,
  direction,
  nextDirection,
  app
});
