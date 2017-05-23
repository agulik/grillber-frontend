/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';
import {Row, Col, Collapsible, CollapsibleItem, Preloader} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import api from '../../api';
import moment from 'moment';
import './OrderHistory.css'


class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._fetchData()
  }

  _fetchData = () => {
    api.getOrderHistory()
    .then((orderHistory) => {
      const formattedDropDate = `Drop-off date: ${moment(orderHistory[0].dropDate).format('MM-DD-YYYY')}`;
      const formattedPickDate = `Date picked up: ${moment(orderHistory[0].pickUpDate).format('MM-DD-YYYY')}`
      const bookingTotal = `Booking total: $${orderHistory[0].bookingTotal}`;
      const bbqTitles = `BBQ Model(s): ${orderHistory[0].title}`;
      const dropOffSpot = `Drop-off address: ${orderHistory[0].location}`
      this.setState({
        orderHistory: orderHistory,
        formattedDropDate: formattedDropDate,
        bookingTotal: bookingTotal,
        formattedPickDate: formattedPickDate,
        bbqTitles: bbqTitles,
        dropOffSpot: dropOffSpot
      })
    })
  }


  render() {

    let {orderHistory, user, formattedDropDate, bookingTotal, formattedPickDate, bbqTitles, dropOffSpot} = this.state;

    console.log(orderHistory)
    if (!orderHistory) {
      return (
        <div className='home'>
          <GrillberNav />
          <p className='grillberorder-history'>Fetching order history</p>
          <div className="spinner">
            <Row>
              <Col s={12}>
                <Preloader color='yellow' size='big'/>
              </Col>
            </Row>
          </div>
        </div>
        )
      }
     if (orderHistory && orderHistory.length) {
      return (
        <div className='home'>
          <GrillberNav />
          <div className="order-history-collapsable">
            <h2>Your Order History</h2>
            <Collapsible className="history-collapsable">
              <CollapsibleItem header={formattedDropDate}>
                <p className='grillberorder-history'>{bookingTotal}</p>
                <p className='grillberorder-history'>{formattedPickDate}</p>
                <p className='grillberorder-history'>{bbqTitles}</p>
                <p className='grillberorder-history'>{dropOffSpot}</p>
              </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
        )
      } else {
        return (
          <div className='home'>
            <GrillberNav />
            <p className='grillberorder-history'>You currently have not placed any orders.</p>
            <Link to="/orders/new"><p className='grillberorder-place-order new-order-redirect'>Id like to place my first order!</p></Link>
          </div>
        );
      }
  }
}

export default OrderHistory;
