import React from 'react';
import { Route} from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';



export default () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <AuthRoute path='/login' component={LoginContainer}/>
        <AuthRoute path='/signup' component={SignupContainer}/>
    </div>
)