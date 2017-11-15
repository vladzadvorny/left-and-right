import { SET_DIRECTION, APP_STOP } from './actionTypes';

const initialState = {
  direction: null,
  hash: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DIRECTION:
      return {
        direction: action.direction,
        hash: action.hash
      };
    case APP_STOP:
      return {
        direction: null,
        hash: null
      };
    default:
      return state;
  }
};
