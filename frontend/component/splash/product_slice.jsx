import React from 'react';
import { Link} from 'react-router-dom';

const ProductSlice = (props) => {
    return(
        <div>
            <ul>
                {
                    props.products.map(product => 
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img className="product-image" src={product.image}/>
                            </Link>
                        </li>
                        )
                }
            </ul>
        </div>
    )
}