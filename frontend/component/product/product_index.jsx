import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    componentDidMount(){
        
        this.props.fetchProducts();
    }

    render(){
        const {products} = this.props
        return (
            <div>
                <ul className="product-list">
                    {
                        
                        products.map(product => (
                            <ProductIndexItem
                                product={product}
                                key={product.id}
                            />
                            
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductIndex