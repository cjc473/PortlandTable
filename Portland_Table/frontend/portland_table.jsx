import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signup, login, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to PortlandTable</h1>, root);


  //testing

  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //test end
})