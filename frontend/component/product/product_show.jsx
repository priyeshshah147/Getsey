import React from 'react';
import ReviewFormContainer from '../review/create_form_container';
import ReviewIndexContainer from '../review/review_index_container';

class ProductShow extends React.Component {
   constructor(props){
       super(props)
    this.handleClick = this.handleClick.bind(this)
   }
   componentDidMount(){
       
       this.props.fetchProduct(this.props.match.params.productId),
       this.props.fetchReviews(this.props.match.params.productId)

   }

   handleClick(e){
       e.preventDefault();
        const {addCartItem, currentUser} = this.props;
        addCartItem(this.props.product)
   }
  render(){
      const {product} = this.props
      return(
         (product)? <div className="complete-showpage">
                        <div className="product-showpage">
                                <img className="product-show-icon" src={product.image}/>
                                <img className="product-show" src={product.image}/>                            
                            <div className="product-details">
                                <ul>
                                <li className="product-name-show">{product.product_name}</li>
                                <li className="product-description-show">{product.description}</li>
                                <li className="product-price-show">${product.price}</li>
                                <button onClick={this.handleClick} className="cart-show">Add to cart</button>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="review-index">
                            <ReviewFormContainer product={product}/>
                            <ReviewIndexContainer product={product}/> 
                            
                        </div> 
                    </div> : null
      )
  }
}

export default ProductShow