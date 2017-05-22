import React, {Component} from 'react';
// import { browserHistory, Link } from 'react-router';
// import {Icon, Col, Row, Input, Button} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
// import auth from '../../auth';
import './Faq.css';


export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="home">
        <GrillberNav />
        <div className="faq-copy">
          <h2>FAQ</h2>
          <h3 className="faq-head">How long does it take for my order to be delivered?</h3>
          <p>It takes approximately 30 minutes to have an order delivered if the drop off point is within 20km of one of our distribution centers</p>
          <h3 className="faq-head">Can I set a drop off point on public property?</h3>
          <p>As long as you have the right permissions and authorization to do so.</p>
        </div>
      </div>
    );
  }

}
