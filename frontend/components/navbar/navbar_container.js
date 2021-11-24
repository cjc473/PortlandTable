import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Navbar)