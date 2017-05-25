import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { Row, Input, Button} from 'react-materialize';
import auth from '../../auth';
// import { API_HOST } from './config';
import './Signup.css';

const ENTER = 13;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: ""
    };
  }

  _handlePhoneInput = (event) => {

    let value = event.target.value;

    value = value.replace(/\D/g, '');
    value = value.substring(0, 14);

    if (value.length === 0) {
      this.setState({currentInput: value})
    } else if (value.length < 4) {
      value = '(' + value;
      this.setState({currentInput: value})
    } else if (value.length < 7) {
      value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6);
      this.setState({currentInput: value})
    } else {
      value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + ' - ' + value.substring(6, 10);
      this.setState({currentInput: value})
    }
  }

  _handlePasswordInput = (event) => {

    // let {error} = this.state;
    let value = event.target.value;

    if (value.length < 8 ) {
      this.setState({
        error: "Your password must be at least 8 characters long"
      })
    } else {
      this.setState ({
        error: ""
      })
    }
  }

  _handleSignUp = () => {

    // let {error} = this.state;

    let firstName = this.refs.firstname.state.value;
    let lastName = this.refs.lastname.state.value;
    let phone = this.refs.phone.state.value;
    let email = this.refs.email.state.value;
    let password = this.refs.password.state.value;
    let confirmPassword = this.refs.confirmpassword.state.value;

    if (firstName && lastName && phone && email && password && confirmPassword) {
      if (password.length >= 8) {
        if (password === confirmPassword) {
          auth.signup(firstName, lastName, phone, email, password)
          .then(res => browserHistory.push('/auth/login'))
          .catch(console.error);
        } else {
          this.setState ({
            error: "Your passwords do not match"
          })
        }
      } else {
        this.setState ({
          error: "Your password must be at least 8 characters long"
        })
      }
    } else {
      this.setState ({
        error: "Please complete all the fields"
      })
    }
  }

  _handleEnter = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null });
    }
    if (e.keyCode===ENTER) {
      this._handleSignUp();
    }
  }

  render() {

    let {currentInput, error} = this.state;

    return (
      <div className="signup-background">
        <div className="signup-form">
          <div className="signup-header">
            <p>Sign up to experience the convenience of grilling anywhere</p>
          </div>
          <Row>
            <Input s={6} className="left-side" label="First Name" type="text" ref="firstname" />
            <Input s={6} className="right-side" label="Last Name" ref="lastname" />
            <Input s={12} label="Phone" onInput={this._handlePhoneInput} value={currentInput} ref="phone"/>
            <Input s={12} type="email" label="Email" ref="email" />
            <Input s={12} type="password" label="Password" ref="password" onInput={this._handlePasswordInput} />
            <Input s={12} type="password" label="Confirm Password" ref="confirmpassword" onKeyUp={this._handleEnter}/>
          </Row>
            <Button onClick={this._handleSignUp}>Sign up</Button>
            <span className="error">{error}</span>
          <Link to="/auth/login">I already have an account</Link>
        </div>
      </div>
    );
  }
}
