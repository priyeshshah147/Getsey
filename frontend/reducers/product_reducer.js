import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_PRODUCT_ERRORS} from "../actions/product_actions";

const productReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_PRODUCT:
            
            return Object.assign({}, state, action.product);
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT_ERRORS:
            return null;
        default:
            return state;
    }
}

export default productReducer;