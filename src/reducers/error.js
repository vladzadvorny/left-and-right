import { ENABLE_ERROR, DISABLE_ERROR } from './actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case ENABLE_ERROR:
      return true;
    case DISABLE_ERROR:
      return false;
    default:
      return state;
  }
};
