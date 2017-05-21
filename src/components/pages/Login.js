/* eslint-disable */
import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { Row, Input, Button} from 'react-materialize';
import auth from '../../auth';
import './Login.css';

const ENTER = 13;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleLogin = () => {

    // let {error} = this.state;

    let email = this.refs.email.state.value;
    let password = this.refs.password.state.value;

    // need to add if statement for password
    // if password doesn't match the one in the database,
    // show error: "your password is incorrect"

    if (email && password) {
      auth.login(email, password)
      .then(res => browserHistory.push('/'))
      .catch(console.error);
    }
    else {
      this.setState({ error: "Invalid email and password combination"});
    }
  }

  _handleEnter = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null });
    }
    if (e.keyCode===ENTER) {
      this._handleLogin();
    }
  }

  render() {

    let {error} = this.state;
    // let {currentInput} = this.state;

    return (
      <div className="login-background">
      
        <div className="login-form">
        
        <div className="login-header">
          <p>Welcome back!</p>
          <p>Please sign in</p>
        </div>
        
          <Row>
            <Input s={12} type="email" label="Email" ref="email" />
            <Input s={12} type="password" label="password" ref="password" onKeyUp={this._handleEnter} />
          </Row>
          
          <Button onClick={this._handleLogin}>Login</Button>
          <span className="error">{error}</span>
          <Link to="/auth/signup">I'm not yet a member</Link>          
        </div>

      </div>
    );
  }

}
