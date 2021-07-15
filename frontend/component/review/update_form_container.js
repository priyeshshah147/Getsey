import { connect } from "react-redux";
import { updateReview,  } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Update_review'
})

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)