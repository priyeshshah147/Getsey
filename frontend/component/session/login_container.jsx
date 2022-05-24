import { connect } from 'react-redux';
import React from 'react';
// import { Link} from 'react-router-dom';
import {login, removeErrors} from '../../actions/session_actions'
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = ({errors}) => {
    return {errors: errors.session,
    formType: 'Sign in',
    // navlink: <Link to={"/signup"}>sign up instead</Link>
            }
    }

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    deleteErrors :() => dispatch(removeErrors()),
    otherForm:(
        <button className='modal-register' onClick={() => dispatch(openModal('signup'))} >
            Register
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LoginForm)