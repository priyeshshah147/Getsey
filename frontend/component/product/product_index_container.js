import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts} from '../../actions/product_actions';

const mSTP =(state) => {
    
    return{
        products: Object.values(state.entities.products)
    }
   
}

const mDTP = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mSTP, mDTP)(ProductIndex);