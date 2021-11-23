import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">Sign Up</Link>
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(SessionForm);