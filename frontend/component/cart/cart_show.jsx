import React from 'react';
import {Icon} from '@iconify/react';
import { Link} from 'react-router-dom';

class CartShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            product: this.props.id,
            quantity: {label: this.props.quantity, value: this.props.quantity}
        }
        this.options = [
            {label: 1, value:1},
            {label: 2, value:2},
            {label: 3, value:3},
            {label: 4, value:4},
            {label: 5, value:5},
            {label: 6, value:6},
            {label: 7, value:7},
            {label: 8, value:8},
            {label: 9, value:9},
            {label: 10, value:10},
            {label: 11, value:11},
            {label: 12, value:12},
            {label: 13, value:13},
            
        ]

        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(prevProps, prevState){

    }

    handleDelete(e){
        e.preventDefault();
        this.props.removeItem(this.props.cartItem)
    }

    

    update(value){
        this.setState({quantity:value})
    }
    render(){
        let quantity = this.props.quantity
        let totalPrice = (quantity * this.props.price)
        let eachPrice = this.props.price * 1.00
        let item = {id: this.props.cartItem, user:this.props.user, product:this.props.id, quantity:this.state.quantity.value,
             description: this.props.description
        }
        

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
                            <div className="cart-item-quantity">{item.quantity}</div>
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
                        <textarea className="cart-item-textbox">
                            Add a note (optional)
                        </textarea>

                    </div>
                    <p className="line-divider-cart"></p>
                </div>

            </li>
        )
    }
}

export default CartShow;