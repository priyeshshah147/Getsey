import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import reviewErrorReducer from './review_error_reducers';

export default combineReducers({
  session,
  reviewErrorReducer,
});
