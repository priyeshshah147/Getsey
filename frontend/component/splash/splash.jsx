import React from 'react';
import {Link} from 'react-router-dom';
import ProductPiece from './product_piece';

class Splash extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    componentDidMount(){
        this.props.fetchProducts();
        // this.props.fetchProduct(this.props.match.params.productId);
    }
    render(){
        const { products} = this.props
        return(
            <div>
                <div className="first-layer">
                    <div className='first-layer-title'>
                        <p className="title">Made in the USA</p>
                    </div>
                    <ul className='first-layer-images'>
                        
                            <ProductPiece product={products.slice(3,4)} title="For her" />
                            <ProductPiece product={products.slice(7,8)} title="For him" />
                            <ProductPiece product={products.slice(11,12)} title="For kids" />
                            <ProductPiece product={products.slice(15,16)} title="Home essentials" />
                            <ProductPiece product={products.slice(19,20)} title="Collectables" />
                            <ProductPiece product={products.slice(23,24)} title="For everyone" />
                        
                    </ul>

                </div>
            </div>
        )
    }
}

export default Splash