import React, {Component} from 'react';
import GrillberNav from '../elements/GrillberNav';
import GrillberHero from '../elements/GrillberHero';
import './Home.css';
import { Row, Col } from 'react-materialize';
import PlaceOrders from './PlaceOrders';
import OrderHistory from './OrderHistory';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="home">
        <GrillberNav _handleMenuClick={this._handleMenuClick} />
        <Row>
          <Col s={6}> <PlaceOrders /> </Col>
          <Col s={6} className='home-white-line'> <OrderHistory /> </Col>
       </Row>
      </div>
    );
  }
}
