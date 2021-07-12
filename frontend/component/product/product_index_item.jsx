import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => {
return(
       
    <div className="couple-product-price">
    <Link  to={`/products/${product.id}`}>
        <img  className="photo-disp" src={product.image}/>
    </Link>
    <p className="price-tag"> ${product.price}</p>
    </div>

    )
}

export default ProductIndexItem