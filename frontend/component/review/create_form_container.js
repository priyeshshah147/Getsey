import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps )=> ({
    review: {
        comment: '', 
        rating: ''
    },
    product: ownProps.product,
    formType: 'Add_review'
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)