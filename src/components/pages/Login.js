import React, {Component} from 'react';
import {Icon, Col, Row, Input, Button} from 'react-materialize';
import './Login.css';

const ENTER = 13;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
  //   let { email: {value: email}, password: {value: password} } = this.refs;
  //   if (email && password) {
  //     auth.login(email, password)
  //     .then(res => this.props.router.push('/'))
  //     .catch(console.error);
  //   }
  //   else {
  //     this.setState({ error: "Invalid email and password combination"});
  //   }
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null });
    }
    if (e.keyCode===ENTER) {
      this._handleLogin();
    }
  }

  render() {

    let {currentInput, error} = this.state;

    return (
      <div className="login">
        <span>{error}</span>
        <input type="text" ref="email" placeholder="email"
          onKeyUp={this._handleTyping}
        />
        <input type="password" ref="password" placeholder="password"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleLogin}>login</button>
      </div>
    );
  }

}
