import React, {Component} from 'react';
import {Icon, Col, Row, Input, Button} from 'react-materialize';
import './Signup.css';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      currentInput: ""
    };
  }

  _handleInput = (event) => {
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
      console.log(value)
      this.setState({currentInput: value})
    } else {
      value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + ' - ' + value.substring(6, 10);
      this.setState({currentInput: value})
    }
  }

  render() {

    let {currentInput} = this.state;

    return (
      <div className="signup-background">
        <div className="signup-header">
          <p>Sign up to experience the convenience of grilling anywhere</p>
        </div>
        <Row>
          <Input s={6} label="First Name"/>
          <Input s={6} label="Last Name"/>
          <Input s={12} label="Phone" onInput={this._handleInput} value={currentInput}/>
          <Input s={12} type="email" label="Email"/>
          <Input s={12} type="password" label="password"/>
        </Row>
        <div className="next-section">
          <Button>Sign up</Button>
        </div>
      </div>
    );
  }
}
