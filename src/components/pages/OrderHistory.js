/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import GrillberNav from '../elements/GrillberNav';
import { Row, Col } from 'react-materialize';
import api from '../../api';
import './OrderHistory.css'


class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  compoonentDidMount() {
      api.getOrderHistory()
      .then((orderHistory) => {
        this.setState({
          orderHistory: orderHistory
        })
      })
    }

  render() {

    let {orderHistory} = this.state;

    if (orderHistory) {
      return (
        <div className='home'>
          <GrillberNav />
          <p className='grillberorder-history'>{orderHistory}</p>
        </div>
        )
      }
    return (
      <div className='home'>
        <GrillberNav />
        <p className='grillberorder-history'>You currently have not placed any orders.</p>
        <Link to="/orders/new"><p className='grillberorder-place-order new-order-redirect'>Id like to place my first order!</p></Link>
      </div>
    );
  }
}

export default OrderHistory;
