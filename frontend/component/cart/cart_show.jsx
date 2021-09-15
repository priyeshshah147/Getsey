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
        // const{items, updateCartitem, deleteCartitem} = this.props;
        // const cartitems = items.map(item => {
        //     return(
        //     <CartItem item={item} key={item.id}
        //     updateCartitem={updateCartitem}
        //     deleteCartitem={deleteCartitem}/>
        //     )
        // })
        // let total=0.0;
        // if(item.length != 0){
        //     items.forEach(item => total += parseFloat(item.total_price))
        // }
        // const checkout = total === 0.0 ? "" : <div>
        //     <div>
        //         <h1>How you'll pay</h1>
        //         <label className='cart-payment-type'>americanexpress
        //             <input type="radio" defaultChecked name="radio"/>
        //         </label>
        //         <label className='cart-payment-type'>mastercard
        //             <input type="radio"  name="radio"/>
        //         </label>
        //         <label className='cart-payment-type'>visa
        //             <input type="radio"  name="radio"/>
        //         </label>

        //         <div></div>
                
        //     </div>
        // </div>
        // if(item){
        // return(
        //     // <div>
        //     //     {
        //     //         items.map(item => {
        //     //             <div>item</div>
        //     //         })
        //     //     }
                
        //     // </div>
        // )
        // else {
        //     <div>
        //         no cart items
        //     </div>
        // }
    }
}

export default CartShow;