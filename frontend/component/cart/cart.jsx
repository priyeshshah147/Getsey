import React from 'react';
import CartShow from './cart_show';
import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import product_index_container from '../product/product_index_container';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleCheckout(e){
      e.preventDefault();
      this.props.items.map(item => {
          this.props.removeItem(item.id)
      })
      alert('Thank you for shopping with Getsey')
    }

    randomKeyNum(){
        let min = 147000000000;
        let max = 147999999999;
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    componentDidMount(){
        this.props.fetchAllitems()
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
                    <div className="carbon-emission">
                        <Icon icon="entypo:leaf" />
                        <div className="text-carbon-emission">Getsey offsets carbon emissions from every delivery</div>
                    </div>
                </div>
            )
        }

        let total = 0
        let grandTotal = 0
        let shippingPrice;
        let itemDisplay;
        items.forEach(item => total += (parseFloat(item.price) * parseFloat(item.quantity)))
        let quarter = total/4
        let discount = total * 0.10
        let netTotal = total - discount
        if (netTotal > 50){
            shippingPrice = "FREE"
            grandTotal = netTotal 
        }else {
            shippingPrice = "$4.99"
            grandTotal = netTotal + 4.99 
        }

        if(items.length > 1){
            itemDisplay = "items"
        }else{
            itemDisplay = "item"
        }

        if(!items){
            return(
                <div>Fetching items...</div>
            )
        }else {
            return(
                <div className="all-cart-items">
                    <div className='cart-first-layer'> 
                        <div className="items-in-cart">{items.length} {itemDisplay} in your cart</div>
                        <Link to="/" className="keep-shopping"><div className="keep-shopping">Keep shopping</div></Link>
                    </div>
                    <div className="cart-index-items">
                        <ul className="cart-display-container">
                            {
                                items.map(item => (
                                    <CartShow key={this.randomKeyNum()} user={user} quantity={item.quantity} 
                                    name={item.product_name} price={item.price} photo={item.photoUrl} id={item.product_id} description={item.description}
                                    cartItem={item.id} removeItem={removeItem} total={total.toFixed(2)} updateItem = {updateItem } seller = {item.seller_id}/>
                                ))
                            }
                        </ul>
                        
                        <div className="how-you-pay-container">
                            <div className="how-you-pay-container2">
                                <div className="payment-text text-bold">
                                    How you'll pay
                                </div>
                                <div className="radio-container-main">
                                    <label className="radio-container">
                                        <input type="radio" name="radio" className="container" defaultChecked/>
                                        <span className="circle"></span>
                                        <Icon className="pay-img" icon="grommet-icons:mastercard" />
                                        <Icon className="pay-img" icon="logos:visa" />
                                        <Icon className="pay-img" icon="fontisto:american-express" color="blue" />
                                        <Icon className="pay-img" icon="logos:discover" color="blue" />

                                    </label>
                                    
                                    <br/>
                                    <label className="radio-container">
                                        <input type="radio" name="radio" className="container"/>
                                        <span className="circle"></span>
                                        <Icon className="pay-img" icon="logos:paypal" color="blue" />
                                    </label>

                                    <br/>
                                    <label className="radio-container">
                                        <input type="radio" name="radio" className="container"/>
                                        <span className="circle"></span>
                                        <div className="klarna-text-align">
                                            <img className="pay-img" src={window.klarna}/>
                                            <p className="klarna-text"> 4 interest-free installments</p>
                                        </div>
                                        
                                        <p className="klarna-text">
                                            Pay in 4 installments of ${quarter.toFixed(2)} . <b className="thick">Klarna.</b> <u>Learn more</u>
                                        </p>
                                        <br/>
                                    </label>
                                    
                                </div>
                                <div className="payment-section">
                                    <div className="payment-text text-bold">Item(s) total</div>
                                    <div className="payment-text text-right">${total.toFixed(2)}</div>
                                </div>
                                <div className="payment-section">
                                    <div className="payment-text text-bold">Shop discount</div>
                                    <div className="payment-text text-right">-${discount.toFixed(2)}</div>
                                </div>

                                <p className="line-divider-payment"></p>

                                <div className="payment-section">
                                    <div className="payment-text">Subtotal</div>
                                    <div className="payment-text text-right">${netTotal.toFixed(2)}</div>
                                </div>

                                <div className="payment-section">
                                    <div className="payment-text">Shipping</div>
                                    <div className="payment-text text-right">{shippingPrice}</div>
                                </div>

                                <p className="line-divider-payment"></p>

                                <div className="payment-section">
                                    <div className="payment-text text-bold">Total ({items.length} {itemDisplay})</div>
                                    <div className="payment-text text-bold text-right">${grandTotal.toFixed(2)}</div>
                                </div>
                                <button onClick={this.handleCheckout} className="checkout-button">Proceed to checkout</button>

                                <div className="text-tax">
                                * Additional duties and taxes <u>may apply</u>

                                </div>

                            </div>
                            <div className="text-eco">
                                The Uplift Fund supports nonprofits that provide resources to creative entrepreneurs in communities that need it most. You can donate your change at Checkout.

                            </div>
                            
                        </div>

                    </div>
                    <div className="carbon-emission">
                        <div><Icon icon="entypo:leaf"/></div>
                        <div className="text-carbon-emission">Getsey offsets carbon emissions from every delivery</div>
                    </div>
                </div>
            )
        }
     


    }
}

export default Cart