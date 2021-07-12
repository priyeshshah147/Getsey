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
         (product)? <div><ul><img className="product-show" src={product.image}/>
                        <li>{product.price} </li>
                       <li>{product.description} </li>
                        </ul>
                    </div> : null
            

      
          
       
      )
  }
}

export default ProductShow