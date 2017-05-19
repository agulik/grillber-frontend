import React, {Component} from 'react';
import {Button} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import './NewOrder.css';
import {Row, Col} from 'react-materialize';
import NumberList1 from './NumberList1';
import NumberList2 from './NumberList2';
import NumberList3 from './NumberList3';
import NumberList4 from './NumberList4';
import AltNumberList1 from './AltNumberList1';
import AltNumberList2 from './AltNumberList2';
import AltNumberList3 from './AltNumberList3';
import AltNumberList4 from './AltNumberList4';
import Date from '../elements/Date';
import Time from '../elements/Time';
import Map from '../elements/Map';
import moment from 'moment';
import DateTime from '../elements/DateTime';
import api from '../../api';
import CardCheckout from './CardCheckout';


export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNum1: true,
      listNum2: false,
      listNum3: false,
      listNum4: false
    };
  }
  
  _handleListItem1 = () => this.setState({listNum1: true, listNum2: false, listNum3: false, listNum4: false});

  _handleListItem2 = () => {
    let {deliveryDate} = this.state
    deliveryDate = moment(deliveryDate).format('YYYY-MM-DD');

    this.setState({
      listNum1: false,
      listNum2: true,
      listNum3: false,
      listNum4: false
    })
    console.log(deliveryDate)
  }

  _handleListItem3 = () => this.setState({listNum1: false, listNum2: false, listNum3: true, listNum4: false});

  _handleListItem4 = () => this.setState({listNum1: false, listNum2: false, listNum3: false, listNum4: true});

  _handleConfirmOrder = () => {
    let {deliveryDate, deliveryTime, pickupDate, pickupTime} = this.state

    // generate all data from order and send off to database
  }

  _saveDeliveryDate = (deliveryDate) => this.setState({deliveryDate})

  _saveDeliveryTime = (deliveryTime) => this.setState({deliveryTime})

  _savePickupDate = (pickupDate) => this.setState({pickupDate})

  _savePickupTime = (pickupTime) => this.setState({pickupTime})

  render() {
    const {listNum1, listNum2, listNum3, listNum4} = this.state
    const {deliveryDate, deliveryTime, pickupDate, pickupTime} = this.state

    if (listNum1) {
      return (
        <div className="home">
          <GrillberNav _handleMenuClick={this._handleMenuClick}/>
          <Row>
            <Col s={6}>
              <AltNumberList1/>
              <NumberList2/>
              <NumberList3/>
              <NumberList4/></Col>
            <Col s={6} className='neworder-white-line'>
              <div className="new-order-delivery">
                <h2>Delivery Time:</h2>
                <br/>
                <Date data={deliveryDate} saveData={this._saveDeliveryDate}/>
                <Time data={deliveryTime} saveData={this._saveDeliveryTime} className="new-order-time"/>
              </div>
              <br/>
              <div className="new-order-pickup">
                <h2>Pickup Time:</h2>
                <br/>
                <Date data={pickupDate} saveData={this._savePickupDate}/>
                <Time data={pickupTime} saveData={this._savePickupTime} className="new-order-time"/>
              </div>
              <Button onClick={this._handleListItem2}>Continue</Button>
            </Col>
          </Row>
        </div>
      );
    } else if (listNum2) {
      return (
        <div className="home">
          <GrillberNav _handleMenuClick={this._handleMenuClick}/>
          <Row>
            <Col s={6}>
              <NumberList1/>
              <AltNumberList2/>
              <NumberList3/>
              <NumberList4/></Col>
            <Col s={6} className='neworder-white-line'>
              <Button onClick={this._handleListItem1}>Back</Button>
              <Button className="drop-off-two" onClick={this._handleListItem3}>Continue</Button>
            </Col>
          </Row>
        </div>
      );
    } else if (listNum3) {
      return (
        <div className="home">
          <GrillberNav _handleMenuClick={this._handleMenuClick}/>
          <Row>
            <Col s={6}>
              <NumberList1/>
              <NumberList2/>
              <AltNumberList3/>
              <NumberList4/></Col>
            <Col s={6} className='neworder-white-line'>
              <Map/>
              <Button className="drop-off-btn" onClick={this._handleListItem2}>Back</Button>
              <Button className="drop-off-btn drop-off-two" onClick={this._handleListItem4}>Continue</Button>
            </Col>
          </Row>
        </div>
      );
    } else if (listNum4) {
      return (
        <div className="home">
          <GrillberNav _handleMenuClick={this._handleMenuClick}/>
          <Row>
            <Col s={6}>
              <NumberList1/>
              <NumberList2/>
              <NumberList3/>
              <AltNumberList4/></Col>
            <Col s={6} className='neworder-white-line'>
              <CardCheckout/>
              <Button onClick={this._handleListItem3}>Back</Button>
              <Button className="drop-off-two" onClick={this._handleConfirmOrder}>Place order</Button>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="home">
          <GrillberNav _handleMenuClick={this._handleMenuClick}/>
          <Row>
            <Col s={6}>
              <NumberList1/>
              <NumberList2/>
              <NumberList3/>
              <NumberList4/></Col>
            <Col s={6} className='neworder-white-line'>
              <DateTime/></Col>
          </Row>
        </div>
      );
    }

  }
}
