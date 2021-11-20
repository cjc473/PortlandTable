import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  //testing

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  
  //test end
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to PortlandTable</h1>, root);
})