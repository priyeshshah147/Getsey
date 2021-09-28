import React from 'react';
import {Icon} from '@iconify/react';
import { Link} from 'react-router-dom';


class CartShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            product: this.props.id,
            quantity: this.props.quantity
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
        this.updateDB = this.updateDB.bind(this);
    }

    handleDelete(e){
        e.preventDefault();
        this.props.removeItem(this.props.cartItem)
    }

    handleQtyChange(e){
        e.preventDefault();
        this.setState({quantity: parseInt(e.target.value)}, ()=>{
            this.updateDB();
        })

    }

    updateDB(){
        this.props.updateItem({ product_id: this.props.id, user_id: this.props.item.user_id, quantity: this.state.quantity, id: this.props.cartItem})
    }


    render(){
        let quantity = this.props.quantity
        let totalPrice = (quantity * this.props.price)
        let eachPrice = this.props.price * 1.00

        

        return (
            <li className="cart-index-item" key={this.props.id}>
                <div className="item-index">
                    <div className="cart-item-section-1">
                        <Link to={`/products/${this.props.id}`}><img className="cart-show-image" src={this.props.photo}/></Link>
                    </div>
                    <div className="cart-item-section-2">
                        <div className="cart-item-description">{this.props.description}</div>
                        <div><button className="cart-remove-item" onClick={this.handleDelete}>Remove</button></div>
                        
                    </div>
                    <div className="cart-item-section-3">
                        <div className="cart-item-section-3a">
                            <div className="cart-item-quantity">

                            <select value={this.state.quantity} onChange={this.handleQtyChange} className="qty-cart-page">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            
                            </div>
                            <div className="cart-item-prices">
                                <div className="item-total-price">${totalPrice.toFixed(2)}</div>
                                <div className="item-each-price text-right">(${eachPrice.toFixed(2)} each)</div>
                            </div>
                        </div>
                        <div className="over-20-people">
                            Over 20 people have this in their cart
                        </div>
                    </div>
                </div>
                <div classNam="item-index-2">
                    <div className="item-index-2a">
                        <div className="item-index-2a-1">
                            <div className="item-index-2a-1a"><input type="checkbox"/>This order is a gift</div>
                            <div className="item-index-2a-1b ">Prices will not be shown on packing slip</div>
                        </div>
                        <div className="item-index-2a-2">
                            <Icon icon="pepicons:label" hFlip={true} /> 
                            <div className="coupon-text">Apply shop coupon codes</div>
                        </div>

                    </div>
                    <div className="item-index-2b">
                        <textarea className="cart-item-textbox" placeholder="Add a note"/>
                    
            

                    </div>
                    <p className="line-divider-cart"></p>
                </div>

            </li>
        )
    }
}

export default CartShow;