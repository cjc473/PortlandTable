import React from "react";
import Logo from "./logo";

const Navbar = ({ currentUser, logout, openModal }) => {

  return (
    <div className="navbar-container">
      <Logo />
      {currentUser ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div className="sessionButtons">
          <button id="signup-button" onClick={() => openModal('signup')}>Sign up</button>
          <button id="login-button" onClick={() => openModal('login')}>Sign in</button>
        </div>
      )}
    </div>
  )
    
}

export default Navbar;





