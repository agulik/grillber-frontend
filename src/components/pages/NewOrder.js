import React, {Component} from 'react';
import {Button} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import './NewOrder.css';
import {Row, Col, Collapsible, CollapsibleItem} from 'react-materialize';
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
import api from '../../api';
import CardCheckout from './CardCheckout';


var masterDeliveryDate = ""

export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNum1: true,
      listNum2: false,
      listNum3: false,
      listNum4: false,
      productList: []
    };
  }

  _handleListItem1 = () => this.setState({listNum1: true, listNum2: false, listNum3: false, listNum4: false});

  _handleListItem2 = () => {
    let {deliveryDate, productData} = this.state
    deliveryDate = moment(deliveryDate).format('YYYY-MM-DD');

    this.setState({
      listNum1: false,
      listNum2: true,
      listNum3: false,
      listNum4: false
    })

  api.requestAvailableProducts(deliveryDate)
  .then((products) => {
    var productData = new Array();

    for ( var i = 0, l = products.length; i < l; i++) {
      var position = productData.map(function(item){ return item.title }).indexOf(products[i].title);

      if ( position == -1 ) {
        products[i].id = [products[i].id]

        productData.push(products[i])
        console.log("Product added");
      }
      else {
        productData[position].id.push(products[i].id);
      }
    }
    this.setState({
      productData: productData
    })
    console.log(productData);
    console.log(productData[0].id.length);
    })
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

    let {location} = this.refs;

    let lat = location.state.bounds.f.b;
    let lng = location.state.bounds.b.b

    this.setState({
      listNum1: false,
      listNum2: false,
      listNum3: false,
      listNum4: true
       });

    console.log(lat, lng)
  }


  _handleConfirmOrder = () => {
    let {deliveryDate, deliveryTime, pickupDate, pickupTime} = this.state

    // generate all data from order and send off to database
  }

  _saveDeliveryDate = (deliveryDate) => {
    masterDeliveryDate = moment(deliveryDate).format('YYYY-MM-DD');
    this.setState({
      deliveryDate: deliveryDate
    })
  }

  _saveDeliveryTime = (deliveryTime) => this.setState({deliveryTime})

  _savePickupDate = (pickupDate) => this.setState({pickupDate})

  _savePickupTime = (pickupTime) => this.setState({pickupTime})

  _saveLocation = (location) => this.setState({location})

  render() {
    const {listNum1, listNum2, listNum3, listNum4} = this.state
    const {deliveryDate, deliveryTime, pickupDate, pickupTime} = this.state
    const {productData} = this.state

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
                <Date data={deliveryDate} saveData={this._saveDeliveryDate} className="new-order-date"/>
                <Time data={deliveryTime} saveData={this._saveDeliveryTime} className="new-order-time"/>
              </div>
              <br/>
              <div className="new-order-pickup">
                <h2>Pickup Time:</h2>
                <br/>
                <Date ref="lastname" data={pickupDate} saveData={this._savePickupDate} className="new-order-date"/>
                <Time ref="lastname" data={pickupTime} saveData={this._savePickupTime} className="new-order-time"/>
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
              <div className="popout-panels">
                <Col s={6} className='neworder-white-line'>
                  <Collapsible popout>
                    <CollapsibleItem /* header={ productData[0].title} */ icon='whatshot'>
                      <div>
                        {/* {productData[0].description} */}
                      </div>
                      {/* <div className="dangerous-text" dangerouslySetInnerHTML={{__html: productData[0].description}} /> */}
                    </CollapsibleItem>
                    <CollapsibleItem /* header={productData[1].title} */ icon='whatshot'>
                      <div>
                        {/* {productData[1].description} */}
                      </div>
                    </CollapsibleItem>
                    <CollapsibleItem /* header={productData[2].title} */icon='whatshot'>
                      <div>
                        {/* {productData[2].description} */}
                      </div>
                    </CollapsibleItem>
                    <CollapsibleItem /* header={productData[3].title} */icon='whatshot'>
                      <div>
                        {/* {productData[3].description} */}
                      </div>
                    </CollapsibleItem>
                  </Collapsible>
                  <Button onClick={this._handleListItem1}>Back</Button>
                  <Button className="drop-off-two" onClick={this._handleListItem3}>Continue</Button>
                </Col>
            </div>
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
              <Map ref="location" />
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
              <div>
                <h2>Order Overview</h2>
                <p>drop off date: {masterDeliveryDate}</p>
                <p>drop off time: {deliveryTime}</p>
                <p>pick up date:</p>
                <p>pick up time:</p>
              </div>
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
            <Col s={6} className='neworder-white-line'></Col>
          </Row>
        </div>
      );
    }

  }
}
