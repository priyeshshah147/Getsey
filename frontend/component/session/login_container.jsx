import { connect } from 'react-redux';
import React from 'react';
import { Link} from 'react-router-dom';
import {login, removeErrors} from '../../actions/session_actions'
import LoginForm from './login_form';


const mSTP = ({errors}) => {
    return {errors: errors.session,
    formType: 'login',
    navlink: <Link to={"/signup"}>sign up instead</Link>}
    }

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    deleteErrors :() => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(LoginForm)