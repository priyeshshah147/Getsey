import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import productReducer from './product_reducer';
import reviewReducer from './reviews_reducer';
import cartItemsReducer from './cartitems_reducer';

export default combineReducers({
  users: usersReducer,
  products: productReducer,
  reviews: reviewReducer,
  cartItems: cartItemsReducer
});
