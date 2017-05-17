import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import GrillberHero from '../elements/GrillberHero';
import Signup from './Signup';
import './LandingPage.css';


export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {

    return (
      <div className="landing-page">
        {/* <Row>
          <Col s={7} className='left-side'>
            <GrillberHero />
          </Col>
          <Col s={5} className='right-side'> */}
            <Signup />
          {/* </Col>
        </Row> */}
      </div>
    );
  }

}
