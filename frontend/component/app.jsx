import React from 'react';
import { Route} from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
<<<<<<< HEAD
import Modal from './modal/modal';
=======
import ProductIndexContainer from './product/product_index_container';
>>>>>>> product



export default () => (
    <div>
    <Modal/>
    
    {/* <header>
      <Link to="/" className="header-link">
      </Link>
      <GreetingContainer />a
      </header> */}
    <div>
        <Route path="/" component={NavBarContainer}/>
<<<<<<< HEAD
        {/* <AuthRoute exact path='/login' component={LoginContainer}/>
        <AuthRoute exact path='/signup' component={SignupContainer}/> */}
        
=======
        <Route path="/" component={ProductIndexContainer}/>
        <AuthRoute exact path='/login' component={LoginContainer}/>
        <AuthRoute exact path='/signup' component={SignupContainer}/>
>>>>>>> product
        
    </div>
    </div>
)