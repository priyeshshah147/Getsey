import React from 'react';

class ProductShow extends React.Component {
   constructor(props){
       super(props)
    
   }
   componentDidMount(){
       
       this.props.fetchProduct(this.props.match.params.productId)
   }
  render(){
      const {product} = this.props
      return(
         (product)? <div className="product-showpage">
                        {/* <div className="product-display"> */}
                            <img className="product-show-icon" src={product.image}/>
                            <img className="product-show" src={product.image}/>
                        {/* </div> */}
                        <div className="product-details">
                            <ul>
                            <li className="product-name-show">{product.product_name}</li>
                            <li className="product-description-show">{product.description}</li>
                            <li className="product-price-show">${product.price}</li>
                            <button className="cart-show">Add to cart</button>
                            </ul>
                            
                        </div>
                    </div> : null
            

    
          
       
      )
  }
}

export default ProductShow