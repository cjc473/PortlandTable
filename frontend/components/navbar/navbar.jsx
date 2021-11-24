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
          <button onClick={() => openModal('login')}>Sign in</button>
          <button onClick={() => openModal('signup')}>Sign up</button>
        </div>
      )}
    </div>
  )
    
}

export default Navbar;





