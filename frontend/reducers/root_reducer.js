import { combineReducers } from 'redux';
import errors from './errors_reducer'
import session from './session_reducer';
import entities from './entities_reducer';
import ui from './ui_reducer'

const rootReducer = combineReducers({
  session,
  errors, 
  entities,
  ui,
  
 
});

export default rootReducer;
