import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  componentDidMount() {
    this.props.removeSessionErrors();
  }

  update(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.closeModal();
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demoUser = { username: "demouser", password: "demo1234" }
    this.props.processForm(demoUser);
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const loginForm = () => {
      return(
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Please sign in</h2>
            <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />

                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />

              <br />
    
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />

              <br />
              <input className="session-submit" type="submit" value="Create Account" />
            </div>
          </form>

          <form onSubmit={this.loginDemoUser} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <input className="session-submit" type="submit" value="Demo Login" />
            </div>
          </form>
        </div>
      )
    }

    const signupForm = () => {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Welcome to PortlandTable!</h2>
            {this.renderErrors()}
            <div className="login-form">
              <br />

                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username *"
                />

              <br />

                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Enter email *"
                />

              <br />

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Enter password *"
                />

              <br />
              <input className="session-submit" type="submit" value="Sign In" />
            </div>
          </form>
        </div>
      )
    }

    return (this.props.formType === 'login') ? loginForm() : signupForm();

  }
}

export default SessionForm;