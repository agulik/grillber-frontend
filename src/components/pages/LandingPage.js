import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import './LandingPage.css';


export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {

    return (
      <div className="landing-page">
        <Row>
          <Col s={6} className='left-side'>

          </Col>
          <Col s={4} className='right-side'>

          </Col>
        </Row>
      </div>
    );
  }

}
