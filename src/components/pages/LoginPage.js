import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import GrillberHero from '../elements/GrillberHero';
import Login from './Login';
import './LoginPage.css';


export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {

    return (
      <div>
        <Row>
          <Col s={7} className='left-side'>
            <GrillberHero />
          </Col>
          <Col s={5} className='right-side'>
            <Login />
          </Col>
        </Row>
      </div>
    );
  }

}
