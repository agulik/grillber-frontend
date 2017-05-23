/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import GrillberNav from '../elements/GrillberNav';
// import { Row, Col } from 'react-materialize';
import api from '../../api';
import './OrderHistory.css'


class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    api.getOrderHistory()
    .then((orderHistory) => {
      this.setState({
        orderHistory: orderHistory
      })
      // console.log(order.dropDate, order.pickUpDate, order.bookingTotal, order.title)
    })
  }



  render() {

    let {orderHistory, user} = this.state;
    console.log(orderHistory)

    if (orderHistory) {
      return (
        <div className='home'>
          <GrillberNav />
          <p className='grillberorder-history'>drop off date: {orderHistory[0].dropDate}</p>
          <p className='grillberorder-history'>pick up date: {orderHistory[0].pickUpDate}</p>
          <p className='grillberorder-history'>booking total: ${orderHistory[0].bookingTotal}</p>
          <p className='grillberorder-history'>bbq models: {orderHistory[0].title}</p>
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
