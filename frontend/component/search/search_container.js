import { connect } from 'react-redux';
import Search from './search';
import {fetchProducts} from '../../actions/product_actions';

const mSTP = (state) => {
    return{
        products: Object.values(state.entities.products)
    }
}

const mDTP = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mSTP, mDTP)(Search);