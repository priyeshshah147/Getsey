import React from 'react';
// import { withRouter} from 'react-router-dom';
// import StarRatingComponent from 'react-star-rating-component'

class ReviewIndex extends React.Component {

    constructor (props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.productId)
    }


    render(){
        
        const {reviews} = this.props
        const productReviews = reviews.filter(review => review.product_id === this.props.product.id)
        
        let reviewdivs = productReviews.map(review => (
            <div key={review.id} className="review">        
                <div className="review-name">{review.username}</div>
                <div className="review-star">Rating: {review.rating}</div>
                <div className="review-comment">{review.comment}</div>
                
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
