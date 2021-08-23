import { connect} from 'react-redux';
import CategoryNav from './category_nav';

const mSTP = (state) => {
    return {
        // categories: Object.values(state.entities.categories)
    }
}

export default connect(mSTP)(CategoryNav)