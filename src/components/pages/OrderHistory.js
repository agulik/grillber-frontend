import React, { Component } from 'react';
import GrillberNav from '../elements/GrillberNav';
// import { Row, Col } from 'react-materialize';
import './OrderHistory.css'


class OrderHistory extends Component {

  render() {
    return (
      <div className='home'>
        <GrillberNav />
        <p className='grillberorder-history'>Your order history</p>
      </div>
    );
  }
}

export default OrderHistory;
