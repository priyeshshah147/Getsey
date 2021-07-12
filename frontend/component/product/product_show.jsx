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
         (product)? <div><img className="product-show" src={product.image}/>
                        {product.price}    
                    </div> : null
            

      
          
       
      )
  }
}

export default ProductShow