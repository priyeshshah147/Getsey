import {connect} from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewForm from './review'

const mSTP = state => {
    debugger
    return{
    reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => ({
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),

})

export default connect(mSTP, mDTP)(ReviewForm);