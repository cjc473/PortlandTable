import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
  const { currentUser, logout } = props

  const personalGreeting = () => ( 
    <div>
      <h3>Welcome back {`${currentUser.username}`}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )

  const sessionLinks = () => ( 
    <div>
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  )

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;