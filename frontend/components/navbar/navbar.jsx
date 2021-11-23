import React from "react";
import SessionButtonsContainer from "../session_buttons/session_buttons_container";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <SessionButtonsContainer />
    </div>
  )
}

export default Navbar