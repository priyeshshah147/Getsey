import {connect} from 'react-redux';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import Splash from './splash';

const mSTP = (state, ownProps) => {
    return {
        products: Object.values(state.entities.products),
        product: state.entities.products[ownProps.match.params.productId]
    }
}

const mDTP = (dispatch) => {
    return{
        fetchProducts: () => dispatch(fetchProducts()),
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mSTP, mDTP)(Splash);