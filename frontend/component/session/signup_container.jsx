import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {signup, removeErrors} from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'signup',
      navLink: <Link to={"/login"}>log in instead</Link>,
    };
  };
  
  const mDTP = dispatch => {
    return {
      processForm: (user) => dispatch(signup(user)),
      deleteErrors :() => dispatch(removeErrors()),
      otherForm:(
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
      ),
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(mSTP, mDTP)(SignUpForm);
  