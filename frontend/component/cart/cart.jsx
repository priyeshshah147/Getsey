import React from 'react';
import CartShow from './cart_show';
import {Link} from 'react-router-dom';
import product_index_container from '../product/product_index_container';

class Cart extends React.Component{
    constructor(props){
        super(props)
        // this.handleCheckout = this.handleCheckout.bind(this);
    }

    randomKeyNum(){
        let min = 147000000000;
        let max = 147999999999;
        return Math.floor(Math.random() * (max - min + 1) + min)
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

        let total = 0
        items.forEach(item => total += (parseFloat(item.price) * parseFloat(item.quantity)))
        let quarter = total/4
        if(!items){
            return(
                <div>Fetching items...</div>
            )
        }else {
            return(
                <div className="all-cart-items">
                    <div className='cart-first-layer'>
                        <div className="Hello">{items.length} items in your cart</div>
                        <Link to="/" className="keep-shopping"><div className="keep-shopping">Keep shopping</div></Link>
                    </div>
                    <div className="cart-index-items">
                        <ul className="cart-display-container">
                            {
                                items.map(item => (
                                    <CartShow key={this.randomKeyNum()} user={user} quantity={item.quantity} 
                                    name={item.product_name} price={item.price} photo={item.photoUrl} id={item.product_id} 
                                    cartItem={item.id} removeItem={removeItem} total={total.toFixed(2)} updateItem = {updateItem } seller = {item.seller_id}/>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            )
        }
     


    }
}

export default Cart