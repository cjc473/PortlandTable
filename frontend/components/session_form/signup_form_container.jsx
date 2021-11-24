import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'signup',
  // navLink: <Link to="/login">log in instead</Link>
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors()),
  switchModal: (
    <button type="button" onClick={() => dispatch(openModal("login"))}>Sign in</button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);