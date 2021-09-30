import React from 'react';
import { Link} from 'react-router-dom';
import { Icon } from '@iconify/react';

const ProductSlice = (props) => {
    return(
        <div>
            <ul className="items-splash">
                {
                    props.products.map(product => <li >
                        <Link to={`products/${product.id}`} style={{ textDecoration:'none', color:'black'}} key={product.id} className="item-splash">
                        <div className="photo-disp1">
                            <img src={product.image} className="photo-disp1"/>
                            <Icon icon="akar-icons:heart" className="splash-like" width="13" />
                            <p className="splash-price">${(product.price * 1.00).toFixed(2)}</p>
                        </div>
                        
                        </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ProductSlice;