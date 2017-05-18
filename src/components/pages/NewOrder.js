import React, {Component} from 'react';
import { Button } from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import './NewOrder.css';
import { Row, Col } from 'react-materialize';
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
import DateTime from '../elements/DateTime';
import auth from '../../auth';

class NewOrder extends Component {
  constructor() {
    super();
    this.state = {
      listNum1: true,
      listNum2: false,
      listNum3: false,
      listNum4: false
    };
  }

  _handleListItem1 = () => {
    this.setState({
      listNum1: true,
      listNum2: false,
      listNum3: false,
      listNum4: false
    });
  }

  _handleListItem2 = () => {
    this.setState({
      listNum1: false,
      listNum2: true,
      listNum3: false,
      listNum4: false
    });
  }

  _handleListItem3 = () => {
    this.setState({
      listNum1: false,
      listNum2: false,
      listNum3: true,
      listNum4: false
    });
  }

  _handleListItem4 = () => {
    this.setState({
      listNum1: false,
      listNum2: false,
      listNum3: false,
      listNum4: true
    });
  }

  // _handleDateTime = () => {
  //
  //   let time = this.refs.time.state.value;
  //   let date = this.refs.date.state.value;
  //
  //   if (time && date) {
  //     auth.login(time, date)
  //     .then(res => browserHistory.push('/'))
  //     .catch(console.error);
  //   }
  // }



  render() {
    const listNum1 = this.state.listNum1
    const listNum2 = this.state.listNum2
    const listNum3 = this.state.listNum3
    const listNum4 = this.state.listNum4

    if (listNum1 === true && listNum2 === false
      && listNum3 === false && listNum4 === false) {
        return (
          <div className="home">
            <GrillberNav _handleMenuClick={this._handleMenuClick} />
            <Row>
              <Col s={6}> <AltNumberList1 /> <NumberList2 /> <NumberList3 /> <NumberList4 /></Col>
              <Col s={6} className='neworder-white-line'>
                <div className="new-order-delivery">
                  <h2>Delivery Time:</h2>
                  <br/>
                  <Date />
                  <Time className="new-order-time"/>
                </div>
                <br/>
                  <div className="new-order-pickup">
                    <h2>Pickup Time:</h2>
                    <br/>
                    <Date />
                    <Time className="new-order-time"/>
                </div>
                <Button onClick={this._handleListItem2}>Continue</Button>
              </Col>
            </Row>
          </div>);
       }

    else if (listNum1 === false && listNum2 === true
      && listNum3 === false && listNum4 === false) {
        return (
          <div className="home">
            <GrillberNav _handleMenuClick={this._handleMenuClick} />
            <Row>
              <Col s={6}> <NumberList1 /> <AltNumberList2 /> <NumberList3 /> <NumberList4 /></Col>
              <Col s={6} className='neworder-white-line'>
                <Button onClick={this._handleListItem1}>Back</Button>
                <Button className="drop-off-two" onClick={this._handleListItem3}>Continue</Button>
              </Col>
            </Row>
          </div>);
       }

    else if (listNum1 === false && listNum2 === false
      && listNum3 === true && listNum4 === false) {
        return (
          <div className="home">
            <GrillberNav _handleMenuClick={this._handleMenuClick} />
            <Row>
              <Col s={6}> <NumberList1 /> <NumberList2 /> <AltNumberList3 /> <NumberList4 /></Col>
              <Col s={6} className='neworder-white-line'>
                <Map />
                <Button className="drop-off-btn" onClick={this._handleListItem2}>Back</Button>
                <Button className="drop-off-btn drop-off-two" onClick={this._handleListItem4}>Continue</Button>
              </Col>
            </Row>
          </div>);
       }

    else if (listNum1 === false && listNum2 === false
      && listNum3 === false && listNum4 === true) {
        return (
          <div className="home">
            <GrillberNav _handleMenuClick={this._handleMenuClick} />
            <Row>
              <Col s={6}> <NumberList1 /> <NumberList2 /> <NumberList3 /> <AltNumberList4 /></Col>
              <Col s={6} className='neworder-white-line'>
                <Button onClick={this._handleListItem3}>Back</Button>
                <Button className="drop-off-two">Place order</Button>
              </Col>
            </Row>
          </div>);
       }

    else {
      return (
        <div className="home">
          <GrillberNav _handleMenuClick={this._handleMenuClick} />
          <Row>
            <Col s={6}> <NumberList1 /> <NumberList2 /> <NumberList3 /> <NumberList4 /></Col>
            <Col s={6} className='neworder-white-line'> <DateTime/></Col>
          </Row>
        </div>);
    }

  }
}

export default NewOrder;
