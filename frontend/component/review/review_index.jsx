import React from 'react';
// import { withRouter} from 'react-router-dom';
// import StarRatingComponent from 'react-star-rating-component'
import {Link} from 'react-router-dom';
import DeleteReview from './delete_review';

class ReviewIndex extends React.Component {

    constructor (props){
        super(props)
        this.state={
            updating: false
        }
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.product.id)
    }




    render(){

        
        const {reviews, deleteReview} = this.props
        const productReviews = reviews.filter(review => review.product_id === this.props.product.id)
        
        let reviewdivs = productReviews.map(review => (
            <div key={review.id} className="review">        
                <div className="review-name">{review.username}</div>
                <div className="review-star">Rating: {review.rating}</div>
                <div className="review-comment">{review.comment}</div>
                
                <div className="edit-btn-setup"><Link to={`/reviews/${review.id}/update`} className="edit-review-btn">edit</Link> 
                <DeleteReview review={review} deleteReview={deleteReview}/></div>
            </div>   
          
       ))

       

       let count = productReviews.length
   
        // 
        return (
            <div>
                <p className="review-count">{count} review(s)</p>
               {
                   reviewdivs
               }

            </div>
        )
            
    }

}

export default ReviewIndex;
