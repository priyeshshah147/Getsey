import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import productReducer from './product_reducer';
import reviewErrorReducer from './review_error_reducers';

export default combineReducers({
  users: usersReducer,
  products: productReducer,
  reviewErrorReducer
});
