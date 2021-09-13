import React from 'react';
import { withRouter} from 'react-router-dom'

class CartShow extends React.Component {

    constructor(props){
        super(props)
    }
    render(){
        const{items, updateCartitem, deleteCartitem} = this.props;
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
        return(
            <div>
                {
                    items.map(item => {
                        <div>item</div>
                    })
                }
                
            </div>
        )
        // else {
        //     <div>
        //         no cart items
        //     </div>
        // }
    }
}

export default withRouter(CartShow);