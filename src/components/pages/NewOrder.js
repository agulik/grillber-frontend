/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Button} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import './NewOrder.css';
import {Row, Col, Collapsible, CollapsibleItem, Input} from 'react-materialize';
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
var masterDeliveryTime = ""
var masterPickupDate = ""
var masterPickupTime = ""

const product0IdArray = []
const product1IdArray = []
const product2IdArray = []
const product3IdArray = []

var productPrice0 = ''
var productPrice1 = ''
var productPrice2 = ''
var productPrice3 = ''
var totalProductPrice = ''

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
    let {deliveryDate} = this.state
    // let {productData} = this.state
    deliveryDate = moment(deliveryDate).format('YYYY-MM-DD');

    this.setState({listNum1: false, listNum2: true, listNum3: false, listNum4: false})

    api.requestAvailableProducts(deliveryDate).then((products) => {
      var productData = [];

      for (var i = 0, l = products.length; i < l; i++) {
        var position = productData.map(function(item) {
          return item.title
        }).indexOf(products[i].title);

        if (position === -1) {
          products[i].id = [products[i].id]

          productData.push(products[i])
        } else {
          if (productData[position].id.indexOf(products[i].id) === -1) {
            productData[position].id.push(products[i].id);

          }
        }
      }

      this.setState({productData: productData})
    })
  }

  _handleListItem3 = () => {

    const {product0, product1, product2, product3} = this.state

    this.setState({listNum1: false, listNum2: false, listNum3: true, listNum4: false});

  }

  _handlePlacesChanged = (places) => {
    this.setState({places: places})
  }

  _handleConfirmOrder = () => {
    let {productId, deliveryDate, pickupDate, places, user} = this.state
    places = places[0].formatted_address

    api.submitBookingRequest(productId, deliveryDate, pickupDate, places, user)
    // .then(res => console.log(res))
  }

  _saveDeliveryDate = (deliveryDate) => {
    masterDeliveryDate = moment(deliveryDate).format('MM-DD-YYYY');
    this.setState({deliveryDate: deliveryDate})
  }

  _saveDeliveryTime = (deliveryTime) => {
    masterDeliveryTime = moment(deliveryTime).format('HH:mm');
    this.setState({deliveryTime})
  }

  _savePickupDate = (pickupDate) => {
    masterPickupDate = moment(pickupDate).format('MM-DD-YYYY');
    this.setState({pickupDate})
  }

  _savePickupTime = (pickupTime) => {
    masterPickupTime = moment(pickupTime).format('HH:mm');
    this.setState({pickupTime})
  }

  _handleListItem4 = () => {

    let {currentQuantity0Input, currentQuantity1Input, currentQuantity2Input, currentQuantity3Input} = this.state
    let {productData} = this.state
    let {productId, deliveryDate, pickupDate} = this.state

    currentQuantity0Input = parseInt(currentQuantity0Input)
    currentQuantity1Input = parseInt(currentQuantity1Input)
    currentQuantity2Input = parseInt(currentQuantity2Input)
    currentQuantity3Input = parseInt(currentQuantity3Input)

    let quantity = [parseInt(currentQuantity0Input), parseInt(currentQuantity1Input), parseInt(currentQuantity2Input), parseInt(currentQuantity3Input)];

    if (currentQuantity0Input === 1) {

      product0IdArray.push(productData[0].id[0])
    }
    if (currentQuantity0Input === 2) {
      product0IdArray.push(productData[0].id[0], productData[0].id[1])
    }
    if (currentQuantity0Input === 3) {
      product0IdArray.push(productData[0].id[0], productData[0].id[1], productData[0].id[2])
    }
    if (currentQuantity1Input === 1) {
      product0IdArray.push(productData[1].id[0])
    }
    if (currentQuantity1Input === 2) {
      product0IdArray.push(productData[1].id[0], productData[1].id[1])
    }
    if (currentQuantity1Input === 3) {
      product0IdArray.push(productData[1].id[0], productData[1].id[1], productData[1].id[2])
    }
    if (currentQuantity2Input === 1) {
      product0IdArray.push(productData[2].id[0])
    }
    if (currentQuantity2Input === 2) {
      product0IdArray.push(productData[2].id[0], productData[2].id[1])
    }
    if (currentQuantity2Input === 3) {
      product0IdArray.push(productData[2].id[0], productData[2].id[1], productData[2].id[2])
    }
    if (currentQuantity3Input === 1) {
      product0IdArray.push(productData[3].id[0])
    }
    if (currentQuantity3Input === 2) {
      product0IdArray.push(productData[3].id[0], productData[3].id[1])
    }
    if (currentQuantity3Input === 3) {
      product0IdArray.push(productData[3].id[0], productData[3].id[1], productData[3].id[2])
    }

    var date1 = moment(deliveryDate);
    var date2 = moment(pickupDate);
    var timeDiff = Math.abs(date2.valueOf() - date1.valueOf());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays && product0IdArray.length !== 0) {
      productPrice0 = diffDays * productData[0].priceDaily * product0IdArray.length
    }
    if (diffDays && product1IdArray.length !== 0) {
      productPrice1 = diffDays * productData[1].priceDaily * product1IdArray.length
    }
    if (diffDays && product2IdArray.length !== 0) {
      productPrice2 = diffDays * productData[2].priceDaily * product2IdArray.length
    }
    if (diffDays && product3IdArray.length !== 0) {
      productPrice3 = diffDays * productData[3].priceDaily * product3IdArray.length
    }

    let finalProductArray = Array.from(new Set(product0IdArray))

    console.log(finalProductArray)

    console.log(productPrice0, productPrice1)

    totalProductPrice = productPrice0 + productPrice1 + productPrice2 + productPrice3

    this.setState({listNum1: false, listNum2: false, listNum3: false, listNum4: true, productId: product0IdArray});

  }

  _handlePlacesChanged = (places) => {
    this.setState({places: places})
  }

  _handleConfirmOrder = () => {
    let {productId, deliveryDate, pickupDate, places, user} = this.state
    places = places[0].formatted_address

    console.log(productId)

    console.log(places)

    api.submitBookingRequest(productId, deliveryDate, pickupDate, places, user)
    // .then(res => console.log(res))
  }

  _saveDeliveryDate = (deliveryDate) => {
    masterDeliveryDate = moment(deliveryDate).format('MM-DD-YYYY');
    this.setState({deliveryDate: deliveryDate})
  }

  _saveDeliveryTime = (deliveryTime) => {
    masterDeliveryTime = moment(deliveryTime).format('HH:mm');
    this.setState({deliveryTime})
  }

  _savePickupDate = (pickupDate) => {
    masterPickupDate = moment(pickupDate).format('MM-DD-YYYY');
    this.setState({pickupDate})
  }

  _savePickupTime = (pickupTime) => {
    masterPickupTime = moment(pickupTime).format('HH:mm');
    this.setState({pickupTime})
  }

  _saveProduct0Quantity = (event) => {
    let {currentQuantity0Input} = this.state
    let value0 = event.target.value;
    this.setState({currentQuantity0Input: value0})
  }

  _saveProduct1Quantity = (event) => {
    let {currentQuantity1Input} = this.state
    let value1 = event.target.value;
    this.setState({currentQuantity1Input: value1})
  }

  _saveProduct2Quantity = (event) => {
    let {currentQuantity2Input} = this.state
    let value2 = event.target.value;
    this.setState({currentQuantity2Input: value2})
  }

  _saveProduct3Quantity = (event) => {
    let {currentQuantity3Input} = this.state
    let value3 = event.target.value;
    this.setState({currentQuantity3Input: value3})
  }

  componentDidMount() {
    let token = localStorage.token;
    if (token) {
      api.getUser(token).then((user) => {
        this.setState({user: user.users_id})
      })
    }
  }

  render() {
    const {listNum1, listNum2, listNum3, listNum4} = this.state
    const {deliveryDate, deliveryTime, pickupDate, pickupTime, productData} = this.state
    const {product0, product1, product2, product3} = this.state
    const {currentQuantity0Input, currentQuantity1Input, currentQuantity2Input, currentQuantity3Input} = this.state
    const {places, productId, user} = this.state

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
                <br/>
                <div className="new-order-pickup">
                  <h2>Pickup Time:</h2>
                  <br/>
                  <Date data={pickupDate} saveData={this._savePickupDate} className="new-order-date"/>
                  <Time data={pickupTime} saveData={this._savePickupTime} className="new-order-time"/>
                </div>
                <Button onClick={this._handleListItem2}>Continue</Button>
              </div>
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
                <Collapsible className="new-order-product-description">
                  <CollapsibleItem header={productData[0].title} icon='whatshot'>
                    <Row>
                      <Col s={8}>
                        <p className='new-order-product0-description'>{productData[0].description}</p>
                        <div className="bbq-quantity">
                          <Row>
                            <p>Daily Price: ${productData[0].priceDaily}</p>
                            <p>Weekly Price: ${productData[0].priceWeekly}</p>
                          </Row>
                        </div>
                      </Col>
                      <Col s={4}>
                        <img alt='' className="new-order-images" src={productData[0].imageOpenUrl}/>
                        <Input s={12} className='new-order-input' type='select' label="Quantity" defaultValue='0' onChange={this._saveProduct0Quantity} value={currentQuantity0Input}>
                          <option value='0'>0</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </Input>
                      </Col>
                    </Row>
                  </CollapsibleItem>
                  <CollapsibleItem header={productData[1].title} icon='whatshot'>
                    <Row>
                      <Col s={8}>
                        <p className='new-order-product1-description'>{productData[1].description}</p>
                        <div className="bbq-quantity">
                          <Row>
                            <p>Daily Price: ${productData[1].priceDaily}</p>
                            <p>Weekly Price: ${productData[1].priceWeekly}</p>
                          </Row>
                        </div>
                      </Col>
                      <Col s={4}>
                        <img alt='' className="new-order-images" src={productData[1].imageOpenUrl}/>
                        <Input s={12} className='new-order-input' type='select' label="Quantity" defaultValue='0' onChange={this._saveProduct1Quantity} value={currentQuantity1Input}>
                          <option value='0'>0</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </Input>
                      </Col>
                    </Row>
                  </CollapsibleItem>
                  <CollapsibleItem header={productData[2].title} icon='whatshot'>
                    <Row>
                      <Col s={8}>
                        <p>{productData[2].description}</p>
                        <div className="bbq-quantity">
                          <Row>
                            <p>Daily Price: ${productData[2].priceDaily}</p>
                            <p>Weekly Price: ${productData[2].priceWeekly}</p>
                          </Row>
                        </div>
                      </Col>
                      <Col s={4}>
                        <img alt='' className="new-order-images" src={productData[2].imageOpenUrl}/>
                        <Input s={12} className='new-order-input' type='select' label="Quantity" defaultValue='0' onChange={this._saveProduct2Quantity} value={currentQuantity2Input}>
                          <option value='0'>0</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </Input>
                      </Col>
                    </Row>
                  </CollapsibleItem>
                  <CollapsibleItem header={productData[3].title} icon='whatshot'>
                    <Row>
                      <Col s={8}>
                        <p className='new-order-product3-description'>{productData[3].description}</p>
                        <div className="bbq-quantity">
                          <Row>
                            <p>Daily Price: ${productData[3].priceDaily}</p>
                            <p>Weekly Price: ${productData[3].priceWeekly}</p>
                          </Row>
                        </div>
                      </Col>
                      <Col s={4}>
                        <img alt='' className="new-order-images" src={productData[3].imageOpenUrl}/>
                        <Input s={12} className='new-order-input' type='select' label="Quantity" defaultValue='0' onChange={this._saveProduct3Quantity} value={currentQuantity3Input}>
                          <option value='0'>0</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </Input>
                      </Col>
                    </Row>
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
              <Map _handlePlacesChanged={this._handlePlacesChanged} onInput={this._getInputLocation} value={this.currentLocationInput}/>
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
              <div className="order-summary">
                <h2>Order Overview</h2>
                {currentQuantity0Input > 0
                  ? <p>{productData[0].title}
                      Quantity: {currentQuantity0Input}</p>
                  : null}
                {currentQuantity1Input > 0
                  ? <p>{productData[1].title}
                      Quantity: {currentQuantity1Input}</p>
                  : null}
                {currentQuantity2Input > 0
                  ? <p>{productData[2].title}
                      Quantity: {currentQuantity2Input}</p>
                  : null}
                {currentQuantity3Input > 0
                  ? <p>{productData[3].title}
                      Quantity: {currentQuantity3Input}</p>
                  : null}
                <ul>
                  <li>
                    <p className="over">Drop-off:</p>
                    <p className="overRes">
                      {masterDeliveryDate}
                      at {masterDeliveryTime}</p>
                  </li>
                  <li>
                    <p className="over">Pick-up:
                    </p>
                    <p className="overRes">
                      {masterPickupDate}
                      at {masterPickupTime}</p>
                  </li>
                  <li>
                    <p className="over">Dropoff & pickup address:
                    </p>
                    <p className="overRes">
                      {places[0].formatted_address}</p>
                  </li>
                  <li>
                    <p className="over">Total cost:
                    </p>
                    <p className="overRes">$ {totalProductPrice}</p>
                  </li>
                </ul>
                <CardCheckout/>
                <br/>
                <div className='new-order-last-btns'>
                  <Button onClick={this._handleListItem3}>Back</Button>
                  <Link to="orderconfirmation">
                    <Button className="drop-off-two" onClick={this._handleConfirmOrder}>Place order</Button>
                  </Link>
                </div>
              </div>
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
