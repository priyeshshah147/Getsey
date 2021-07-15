import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.users)
    default:
      return state;
  }
};

export default usersReducer;
