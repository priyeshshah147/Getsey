import React from 'react';
import { Link} from 'react-router-dom';

const ProductSlice = (props) => {
    return(
        <div>
            <ul className="items-splash">
                {
                    props.products.map(product => <li >
                        <Link to={`products/${product.id}`} style={{ textDecoration:'none', color:'black'}} key={product.id} className="item-splash">
                        <img src={product.image} className="photo-disp1"/>
                        <p className="price-tag">${product.price}</p>
                        </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ProductSlice;