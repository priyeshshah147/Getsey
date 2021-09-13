import {connect} from 'react-redux';
import { fetchProduct} from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchReviews } from '../../actions/review_actions';
import { addcartitem } from '../../actions/cartitem_actions';

const mSTP = (state, ownProps) => {
    
    return{product: state.entities.products[ownProps.match.params.productId]}
    

}

const mDTP = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    addCartItem: (product) => dispatch(addcartitem(product))
})

export default connect(mSTP, mDTP)(ProductShow)