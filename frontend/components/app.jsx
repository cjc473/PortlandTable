import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Footer from "./footer";
import ModalContainer from "./modal/modal_container";
import SearchBanner from "./search_banner";


const App = () => (
  <div className="main">
    <ModalContainer />
    <NavbarContainer />
    <SearchBanner />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;