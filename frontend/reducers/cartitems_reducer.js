import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { ADD_CARTITEM, REMOVE_CARTITEM, RECEIVE_ALL_CARTITEMS, RECEIVE_CARTITEM_ERRORS } from "../actions/cartitem_actions";

const cartitemReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_CARTITEMS:
            return action.cartitems;
        case ADD_CARTITEM:
            return Object.assign({}, state, {[action.cartitem.id]: action.cartitem})
        case REMOVE_CARTITEM:
            const newState = Object.assign({}, state);
            delete newState[action.cartitemId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_CARTITEM_ERRORS:
            return null;
        default:
            return state;
    }
}

export default cartitemReducer;