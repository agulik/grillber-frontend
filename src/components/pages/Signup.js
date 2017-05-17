import React, {Component} from 'react';
import {Icon, Col, Row, Input, Button} from 'react-materialize';
import './Signup.css';


export default class Signup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="signup-background">
        <div className="signup-header">
          <p>Sign up to experience the convenience of grilling anywhere</p>
        </div>
        <Row>
          <Input s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="Phone"  />
          <Input s={12} type="email" label="Email"  />
          <Input s={12} type="password" label="password"  />
        </Row>
        <div className="next-section">
          <Button>Sign up</Button>
        </div>
      </div>
    );
  }
}
