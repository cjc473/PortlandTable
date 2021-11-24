import React from "react";

const SessionButtons = ({ currentUser, logout, openModal }) => {

  const displayLogout = () => ( 
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )

  const displaySessionLinks = () => ( 
    <div className="sessionButtons">
      <button onClick={() => openModal('login')}>Sign in</button>
      <button onClick={() => openModal('signup')}>Sign up</button>
    </div>
  )

  return currentUser ? displayLogout() : displaySessionLinks();
}

export default SessionButtons;