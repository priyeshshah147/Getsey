import React from 'react';

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.review;
        this.state.product_id = props.product.id;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateRating = this.updateRating.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(event) {
        this.setState({comment: event.target.value});
    }
    updateRating(event) {
        this.setState({rating: parseInt(event.target.value)});
    }

    render(){

        return(
           
        <div className='review-form-container'>
            <h3 className="review-box">Write a review</h3>
        <form onSubmit={this.handleSubmit}>
            <label className='rating'>Rating 
                <input className='rating-input' value={this.state.rating} type='number' min="1" max="5" onChange={this.updateRating}/>
            </label>
            <br/>
            <h3 className="review-box">Comment</h3>
            <label className='review'>
                <textarea id='review-input' value={this.state.comment} onChange={this.handleChange} />
            </label>
            <br/>
            <input className='review-create-btn' type='submit' value={this.props.formType}/>
        </form>
        </div>

        )

    }
}

export default ReviewForm;

