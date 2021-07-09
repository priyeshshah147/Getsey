import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUser: state.session.id
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  login: () => dispatch(login()),
})

export default connect(mSTP, mDTP)(NavBar);