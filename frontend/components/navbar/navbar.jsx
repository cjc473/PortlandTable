import React from "react";
import SessionButtons from "../session_buttons/session_buttons";
// import SessionButtonsContainer from "../session_buttons/session_buttons_container";
import Logo from "./logo";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <Logo />
      <SessionButtons />
    </div>
  )
}

export default Navbar