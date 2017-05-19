import React, {Component} from 'react';
import { Link } from 'react-router';
import GrillberNav from '../elements/GrillberNav';
import './Home.css';
import { Row, Col } from 'react-materialize';
import PlaceOrders from './PlaceOrders';
import OrderHistory from './OrderHistory';


export default class Home extends Component {


  render() {

    return (
      <div className="home">
        <GrillberNav _handleMenuClick={this._handleMenuClick} />
        <Row>
          <Col s={6}>
            <div className='grillberorder-topdiv grillberorder-both-div'>
              <Link to="/orders/new"><p className='grillberorder-place-order'>Place an order</p></Link>
            </div>
          </Col>
          <Col s={6} className='home-white-line'>
          <div className='grillberorder-topdiv grillberorder-both-div'>
            <Link to="/orders/history"><p className='grillberorder-place-order'>Order History</p></Link>
          </div>
          </Col>
       </Row>
      </div>
    );
  }
}
