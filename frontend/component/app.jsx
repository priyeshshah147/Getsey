import React from 'react';
import { Route} from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Modal from './modal/modal';



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
        {/* <AuthRoute exact path='/login' component={LoginContainer}/>
        <AuthRoute exact path='/signup' component={SignupContainer}/> */}
        
        
    </div>
    </div>
)