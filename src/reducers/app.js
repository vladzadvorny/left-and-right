import { APP_STOP, APP_START } from './actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case APP_START:
      return true;
    case APP_STOP:
      return false;
    default:
      return state;
  }
};
