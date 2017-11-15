import { CHANGE_LEVEL } from './actionTypes';

const initialState = 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LEVEL:
      return action.level;
    default:
      return state;
  }
};
