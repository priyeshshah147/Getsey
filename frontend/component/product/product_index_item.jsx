import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem =({product}) => {
    return(
        <div>
            <li>
                <Link to={`/products/${product.id}`}>
                   
                </Link>
                
            </li>
        </div>
    )
}

export default ProductIndexItem