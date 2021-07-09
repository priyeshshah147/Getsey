import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => {
    debugger
    return(
        <div>
            <li>
                
                <Link to={`/products/${product.id}`}>
                   <img src={product.image}/>
                </Link>
                
            </li>
        </div>
    )
}

export default ProductIndexItem