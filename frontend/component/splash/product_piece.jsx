import React from 'react';
import { Link} from 'react-router-dom';

const ProductPiece = props => {
    return(
        <div>
           {
               props.product.map(product => 
                <Link to={`products/${product.id}`} style={{ textDecoration:'none', color:'black'}} key={product.id}>
                <img src={product.image} className="photo-disp-splash"/>
                </Link>)
           } 
        </div>
    )
}

export default ProductPiece;