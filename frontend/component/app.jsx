import React from 'react';
import { Route} from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Modal from './modal/modal';
import ProductIndexContainer from "./product/product_index_container"
import ProductShowContainer from "./product/product_show_container"
import UpdateFormContainer from "./review/update_form_container"
import Footer from './footer/footer'



export default () => (
    <div>
      <Modal/>
      <header>
        <NavBarContainer />
      </header>
      <div>
          <Route exact path="/" component={ProductIndexContainer}/>
          <Route exact path="/products/:productId"component={ProductShowContainer}/>
          <Route exact path="/reviews/:reviewId/update" component={UpdateFormContainer}/> 
      </div>
      <Footer/>
        {/* <div className="footer">Hello</div>
      </footer> */}
    </div>
)