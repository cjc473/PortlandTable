import React from "react";

const SessionButtons = (props) => {
  const { currentUser, logout } = props

  const displayLogout = () => ( 
    <div>
      <button onClick={logout}>Logout</button>
      <button>test</button>
    </div>
  )

  const displaySessionLinks = () => ( 
    <div className="sessionButtons">
      <button onClick={() => openModal('login')}>Login</button>
      <button onClick={() => openModal('signup')}>Signup</button>
      <button>test</button>
    </div>
  )

  return currentUser ? displayLogout() : displaySessionLinks();

}

export default SessionButtons;