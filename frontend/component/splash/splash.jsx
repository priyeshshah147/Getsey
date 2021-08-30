import React from 'react';
import {Link} from 'react-router-dom';
import ProductPiece from './product_piece';
import ProductIndexContainer from '../product/product_index_container';

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
                        <p className="front-title">Toys, Made in the USA</p>
                    </div>
                    <ul className='first-layer-images'>
                        <ProductPiece product={products.slice(30,31)} />
                        <ProductPiece product={products.slice(31,32)} />
                        <ProductPiece product={products.slice(32,33)} />
                        <ProductPiece product={products.slice(33,34)} />
                        <ProductPiece product={products.slice(34,35)} />
                        <ProductPiece product={products.slice(35,36)}  />  
                    </ul>
                </div >

                <div className="second-layer">
                    
                </div>
                {/* <ProductIndexContainer/> */}
            </div>
        )
    }
}

export default Splash