import {connect} from 'react-redux';
import { fetchProduct} from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchReviews } from '../../actions/review_actions';
import { addItem } from '../../actions/cartitem_actions';

const mSTP = (state, ownProps) => {
    
    return{
        product: state.entities.products[ownProps.match.params.productId],
        currentUser: state.entities.users[state.session.id],
    }
    

}

const mDTP = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    addItem: (cartItem) => dispatch(addItem(cartItem)),
})

export default connect(mSTP, mDTP)(ProductShow)