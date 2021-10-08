import React from 'react';
import { Link} from 'react-router-dom';

const ProductPiece2 = props => {
    return(
        <div>
           {
               props.product.map(product => 
                <Link to={`products/${product.id}`} style={{ textDecoration:'none', color:'black'}} key={product.id} className="disp-splash">
                <img src={product.image} className="photo-disp-splash"/>
                <p className="photo-text">{props.title}</p>
                </Link>)
           } 
        </div>
    )
}

export default ProductPiece2; 