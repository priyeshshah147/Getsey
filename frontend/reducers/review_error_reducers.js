import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEW_ERRORS } from "../actions/review_actions";

const reviewErrorReducer =  (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        // case RECEIVE_REVIEW:
        //     return [];
        // case REMOVE_REVIEW:
        //     return [];
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default reviewErrorReducer;