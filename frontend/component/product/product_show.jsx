import React from 'react';

class ProductShow extends React.Component {
   constructor(props){
       super(props)
    
   }
   componentDidMount(){
       this.props.fetchProduct(this.props.match.params.productId)
   }
  render(){
      
      return(
          <div>

          </div>
      )
  }
}

export default ProductShow