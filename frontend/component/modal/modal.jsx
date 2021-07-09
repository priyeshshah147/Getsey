import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_container';
import SignUpFormContainer from '../session/signup_container';

function Modal({modal, closeModal}){
    if(!modal){
        return null;
    }

    let component;
    switch(modal) {
        case 'login':
            component=<LoginFormContainer/>;
            break;
        case 'signup':
            component=<SignUpFormContainer/>;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => {
    debugger
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal)