import React from 'react';
import {Link} from 'react-router-dom';
import ProductPiece from './product_piece';
import ProductSlice from './product_slice';
import ProductIndexContainer from '../product/product_index_container';

class Splash extends React.Component{
  

    componentDidMount(){
        this.props.fetchProducts();
    }
    render(){
        const { products} = this.props
        return(
            <div className="splash-page">
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
                        <ProductPiece product={products.slice(35,36)} />  
                    </ul>
                </div >

                

                <div className="second-layer">
                    <h3 className="splash-mini-title">Recently viewed & more</h3>
                    <ProductSlice  products={products.slice(0,6)}/>
                </div>

                <div className="second-layer">
                    <h3 className="splash-mini-title">Other Items</h3>
                    <ProductSlice  products={products.slice(24,30)}/>
                </div>

              
                {/* <div className="third-layer">
                    <div className="third-layer-parts">
                        <ProductPiece product={products.slice(30,31)} />
                        <ProductPiece product={products.slice(31,32)} />
                    </div>
                    <div className="third-layer-parts">
                        <ProductPiece product={products.slice(30,31)} />
                        <ProductPiece product={products.slice(31,32)} />
                    </div>
                    <div className="third-layer-parts">
                        <ProductPiece product={products.slice(30,31)} />
                        <ProductPiece product={products.slice(31,32)} />
                    </div>
                    <div className="third-layer-parts">
                        <ProductPiece product={products.slice(30,31)} />
                        <ProductPiece product={products.slice(31,32)} />
                    </div>

                </div> */}
                    
                    
               
                
            </div>
        )
    }
}

export default Splash