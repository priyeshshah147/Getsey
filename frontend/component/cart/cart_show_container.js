import { connect } from 'react-redux';
import { fetchCartitems, deleteCartitem, updateCartitem } from '../../actions/cartitem_actions';
import CartShow from './cart_show';

const mSTP = state => {
    return{
        items: Object.values(state.entities.cartItems)
    }
}

const mDTP = dispatch => {
    return{
        fetchCartitems: () => dispatch(fetchCartitems()),
        deleteCartitem: (itemId) => dispatch(deleteCartitem(itemId)),
        updateCartitem: (itemId, cartitem) => dispatch(updateCartitem(itemId, cartitem))
    }
}

export default connect(mSTP, mDTP)(CartShow);