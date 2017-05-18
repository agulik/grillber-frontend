import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Row, Col } from 'react-materialize';
import './PlaceOrders.css'


export default class PlaceOrders extends Component {
  render() {

    return (
      <div className='grillberorder-topdiv grillberorder-both-div'>
        <Link to="/orders/new"><p className='grillberorder-place-order'>Place an order</p></Link>
      </div>
    );
  }
}
