import React from "react";
import { Link } from "react-router-dom";

const SessionButtons = (props) => {
  const { currentUser, logout } = props

  const displayLogout = () => ( 
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )

  const displaySessionLinks = () => ( 
    <div className="sessionButtons">
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  )

  return currentUser ? displayLogout() : displaySessionLinks();
}

export default SessionButtons;