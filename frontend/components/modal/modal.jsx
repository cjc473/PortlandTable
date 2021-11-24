import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

const Modal = ({ modal, closeModal }) => {

  if (!modal) return null;
  let modalForm;

  switch(modal[0]) {
    case "login":
      modalForm = <LoginFormContainer />
      break;
    case "signup":
      modalForm = <SignupFormContainer />
    default:
      return null;
  }

  return(
    <div className="modal-outside" onClick={closeModal}>
      <div className="modal-inside" onClick={e => e.stopPropagation()}> 
        { modalForm }
      </div>
    </div>
  )
}

export default Modal;
