import React from 'react';
import ReviewFormContainer from '../review/create_form_container';
import ReviewIndexContainer from '../review/review_index_container';
import { Icon } from '@iconify/react';

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
        if(!this.props.currentUser){
            alert("Please sign in or sign up before adding product to the cart")
        }else{
            this.props.addItem({user_id: this.props.currentUser.id, product_id: this.props.product.id, quantity:1})
            .then(this.props.history.push({pathname: '/cart', state: this.state}))
        }
   }
  render(){
      
      const {product} = this.props
        let hooray;
      let descriptionLi = <ul></ul>;
      let arrayDescription = [];
      if(product)  {if((product.price * .90 ) >= 50){
        hooray = <p><b className="thick">Hooray!</b> shipping is free</p>
      }else{
          hooray = <p><b className="thick">Your order arrives in 3 days,</b> if you order today.</p>
      }
      arrayDescription = product.description.split('*')
      descriptionLi = arrayDescription.map(li =>(
          <li className="description-list">{li}</li>
      ))
    }
      return(
         (product)? <div className="complete-showpage">
                        <div className="product-showpage-left-container">
                            <div className="product-show-image-container">
                                <img className="product-show-icon" src={product.image}/>
                                <div className="product-image-container"><img className="product-show-image" src={product.image}/>  </div>
                            </div>
                            <div className="review-index">
                                <ReviewFormContainer product={product}/>
                                <ReviewIndexContainer product={product}/> 
                            </div>  
                        </div>                        
                        <div className="product-details">
                            
                            <div className="product-name-show">{product.product_name}</div>
                            <div className="product-price-show-container">
                                <div className="product-price-show">${(product.price * 1.00).toFixed(2)}</div>
                                <div className="in-stock">
                                    <div><Icon icon="teenyicons:tick-solid"/>  </div>
                                    <div className="in-stock-text"> In Stock</div>
                                </div>
                            </div>
                            <div className="klarna-text-product-show">Pay as low as <u>${(product.price / 4.00).toFixed(2)}</u> <b className="thick">Klarna.</b> <u>Learn more</u></div>
                            <button onClick={this.handleClick} className="cart-show">Add to cart</button>
                            <div className="hooray-container">
                                <Icon icon="emojione:shopping-cart" hFlip={true} width="55px" />
                                <div className="hooray-text"><b className="thick">Other people want this</b>. Over 20 people have this in their carts right now.</div>
                            </div>
                            <div className="hooray-container">
                                <Icon icon="fa:truck" hFlip={true} width="50px" />
                                <div className="hooray-text">{hooray}</div>
                            </div>
                            <div className="hooray-container">
                            <Icon icon="icomoon-free:gift" color="purple" width="50px"/>
                                <div className="hooray-text"><b className="thick">Gift wrapping available.</b> <u>See details</u></div>
                            </div>
                            
                            <div className="product-highlights-title">Highlights</div>
                            <div className="product-highlights-container">
                                <Icon icon="ic:round-front-hand" className="handmade-icon"/>
                                <div className="product-description-text">Handmade</div>
                            </div>

                            <div className="product-description-title">Description</div>
                            <li className="product-description-text description-li">{descriptionLi}</li>
                           
                            
                        </div>
                        
                       
                    </div> : null
      )
  }
}

export default ProductShow