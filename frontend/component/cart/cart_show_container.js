import { connect } from 'react-redux';
import { fetchAllitems, removeItem, updateItem, addItem } from '../../actions/cartitem_actions';
import Cart from './cart';

const mSTP = (state, ownProps) => {
    return{
        user: state.entities.users[state.session.id], 
        items: Object.values(state.entities.cartItems),
        products: Object.values(state.entities.products)
    }
}

const mDTP = dispatch => {
    return{
        fetchProducts: () => dispatch(fetchProducts()),
        fetchAllitems: () => dispatch(fetchAllitems()),
        updateItem: (cartitem) => dispatch(updateItem(cartitem)),
        removeItem: (cartitemId) => dispatch(removeItem(cartitemId)),
        addItem: cartitem => dispatch(addItem(cartitem))
    }
}

export default connect(mSTP, mDTP)(Cart);