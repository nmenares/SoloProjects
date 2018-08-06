import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const defaultState = {
  id: null
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return action.user;
    case LOGOUT_CURRENT_USER:
      return newState;
    default:
      return newState;
  }
};

export default sessionReducer;
