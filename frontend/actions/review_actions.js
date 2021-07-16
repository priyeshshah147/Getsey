import * as ReviewApiUtil from '../utils/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";


const receiveReviews = ({reviews, users}) => ({
    type: RECEIVE_REVIEWS, 
    reviews,
    users
})

const receiveReview = ({review, reviewer}) => ({
    type: RECEIVE_REVIEW,
    review,
    reviewer, 
   
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS, 
    errors
})

export const fetchReviews = (productId) => (dispatch) => (
    ReviewApiUtil.fetchReviews(productId)
    .then((reviews) =>dispatch(receiveReviews(reviews)))
);

// export const fetchReview = (productId) => (dispatch) => (
//     ReviewApiUtil.fetchReview(productId)
//     .then((reviews) =>dispatch(receiveReviews(reviews)))
// );


export const createReview = (review) => dispatch => (
    ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const updateReview = (review) => dispatch => {
    
    return ReviewApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON)))
};

export const deleteReview = (reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON)))
);

