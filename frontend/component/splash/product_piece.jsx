import React from 'react';
import { Link} from 'react-router-dom';

const ProductPiece = props => {
    return(
        <div>
           {
               props.product.map(product => 
                <Link to={`products/${product.id}`} key={product.id}>
                <img src={product.image}/>
                </Link>)
           } 
        </div>
    )
}

export default ProductPiece;