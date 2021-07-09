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
          <div>
              <img scr={product.image}/>
          </div>
      )
  }
}

export default ProductShow