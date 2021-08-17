import React from 'react';

class DeleteReview extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.deleteReview(this.props.review.id)
    }
    
    render (){
        return(
            <div>
                <button onClick={this.handleSubmit} className="edit-review-btn">delete</button>
            </div>
        )
    }

}
export default DeleteReview;