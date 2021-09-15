import React from 'react';
import CartShow from './cart_show';
import {Link} from 'react-router-dom';
import product_index_container from '../product/product_index_container';

class Cart extends React.Component{
    constructor(props){
        super(props)
        // this.handleCheckout = this.handleCheckout.bind(this);
    }

    render(){
        const {items, removeItem, updateItem, products, addItem, user} = this.props;
        if(items.length === 0){
            return(
                <div className="empty-cart">
                    <p className="emptycart-text">Your cart is empty.</p>
                    <Link to="/" className="cart-to-home">
                        <p> Discover something unique to fill it up</p>
                    </Link>
                    <p>Getsey offsets carbon emissions from every delivery</p>
                </div>
            )
        }

        // let total = 0
        // items.forEach(item => total += (parseFloat(item.price) * parseFloat(item.quantity)))
        // let quarter = total/4
        // if(!items){
        //     return(
        //         <div>Fetching items...</div>
        //     )
        // }else {
        //     return(
        //         <div className="all-cart-items">
        //             <div className='cart-first-layer'>
        //                 <div>{items.length} items in your cart</div>
        //                 <Link to="/" className="keep-shopping"><div>Keep shopping</div></Link>
        //             </div>
        //         </div>
        //     )
        // }
     


    }
}

export default Cart