import {connect} from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { createReview } from '../../utils/review_api_util';
import ReviewIndex from './review_index'

const mSTP = state => {
    // 
    return{
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),

})

export default connect(mSTP, mDTP)(ReviewIndex);