import React, { Component } from 'react';
import { Link } from 'react-router';
import GrillberNav from '../elements/GrillberNav';
// import { Row, Col } from 'react-materialize';
import api from '../../api';
import './ConfirmedOrderPage.css'


class ConfirmedOrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className='home'>
        <GrillberNav />
        <div className="order-confirm-div">
          <p className='grillberorder-history'>YOUR ORDER IS BEING PROCESSED</p>
          <p className='grillberorder-history order-confirm-sub'>That BBQ will be coming in hot real soon!</p>
          <br />
          <Link to="/"><p className='grillberorder-place-order new-order-redirect return-home'>Return Home</p></Link>
        </div>
      </div>
    );
  }
}

export default ConfirmedOrderPage;
