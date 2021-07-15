import React from 'react';
// import { withRouter} from 'react-router-dom';
// import StarRatingComponent from 'react-star-rating-component'

class ReviewForm extends React.Component {

    constructor (props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.productId)
    }

    render(){
        
        const {reviews} = this.props
        const productReviews = reviews.filter(review => review.product_id === this.props.product.id)
        // debugger
        return (
            <div>
               {

                   productReviews.map(review => (
                       <p>{review.comment}</p>
                   ))
               }
            </div>
        )
            
    }

}

export default ReviewForm;
