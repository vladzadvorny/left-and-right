import {
  CHANGE_LEVEL,
  ENABLE_ERROR,
  DISABLE_ERROR,
  SET_DIRECTION,
  SET_NEXT_DIRECTION,
  APP_START,
  APP_STOP
} from './reducers/actionTypes';

export const changeLevel = level => ({
  type: CHANGE_LEVEL,
  level
});

export const enableError = () => ({
  type: ENABLE_ERROR
});

export const disableError = () => ({
  type: DISABLE_ERROR
});

export const setDirection = direction => ({
  type: SET_DIRECTION,
  direction,
  hash: Math.random()
    .toString(36)
    .substring(5)
});

export const setNextDirection = direction => ({
  type: SET_NEXT_DIRECTION,
  direction,
  hash: Math.random()
    .toString(36)
    .substring(5)
});

export const appStart = () => ({
  type: APP_START
});

export const appStop = () => ({
  type: APP_STOP
});
