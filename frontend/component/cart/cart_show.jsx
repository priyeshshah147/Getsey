import React from 'react';
// import Select from 'react-select';
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
    }

    componentDidMount(prevProps, prevState){

    }

    

    update(value){
        this.setState({quantity:value})
    }
    render(){
        let quantity = this.props.quantity
        let totalPrice = (quantity * this.props.price)
        let item = {id: this.propscartItem, user:this.props.user, product: this.props.id, quantity: this.state.quantity.value}
        

        return (
            <li className="cart-index-item" key={this.props.id}>
                <div className="item-index">
                    <div>
                        <Link to={`/products/${this.props.id}`}><img className="cart-show-image" src={this.props.photo}/></Link>
                    </div>
                    <div>
                        {item.quantity}
                    </div>
                </div>

            </li>
        )
    }
}

export default CartShow;