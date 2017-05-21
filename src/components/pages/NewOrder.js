import React, {Component} from 'react';
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

export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNum1: true,
      listNum2: false,
      listNum3: false,
      listNum4: false,
      productList: [],
      collapsibleClick1: false,
      collapsibleClick2: false,
      collapsibleClick3: false,
      collapsibleClick4: false,
      collapsibleExpand1: false,
      collapsibleExpand2: false,
      collapsibleExpand3: false,
      collapsibleExpand4: false
    };
  }

  _handleListItem1 = () => this.setState({listNum1: true, listNum2: false, listNum3: false, listNum4: false});

  _handleListItem2 = () => {
    let {deliveryDate} = this.state
    // let {productData} = this.state
    deliveryDate = moment(deliveryDate).format('YYYY-MM-DD');

    this.setState({
      listNum1: false,
      listNum2: true,
      listNum3: false,
      listNum4: false
    })

  api.requestAvailableProducts(deliveryDate)
  .then((products) => {
    var productData = [];

    for ( var i = 0, l = products.length; i < l; i++) {
      var position = productData.map(function(item){ return item.title }).indexOf(products[i].title);

      if ( position === -1 ) {
        products[i].id = [products[i].id]

        productData.push(products[i])
      }
      else {
        productData[position].id.push(products[i].id);
      }
    }
    this.setState({
      productData: productData
    })
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

  }


  _handleConfirmOrder = () => {
    // let {deliveryDate, deliveryTime, pickupDate, pickupTime} = this.state

    // generate all data from order and send off to database
  }

  _saveDeliveryDate = (deliveryDate) => {
    masterDeliveryDate = moment(deliveryDate).format('YYYY-MM-DD');
    this.setState({
      deliveryDate: deliveryDate
    })
  }

  _saveDeliveryTime = (deliveryTime) => {
    masterDeliveryTime = moment(deliveryTime).format('hh:mm');
    this.setState({deliveryTime})
  }

  _savePickupDate = (pickupDate) => {
    masterPickupDate = moment(pickupDate).format('YYYY-MM-DD');
    this.setState({pickupDate})
  }

  _savePickupTime = (pickupTime) => {
    masterPickupTime = moment(pickupTime).format('hh:mm');
    this.setState({pickupTime})
  }

  _saveLocation = (location) => this.setState({location})


  _handleCollapsibleClick1 = () => {
    this.setState({
      collapsibleClick1: true,
      collapsibleExpand1: true,
      collapsibleClick2: false,
      collapsibleExpand2: false,
      collapsibleClick3: false,
      collapsibleExpand3: false,
      collapsibleClick4: false,
      collapsibleExpand4: false,
     });
  }

  _handleCollapsibleClick2 = () => {
    this.setState({
      collapsibleClick1: false,
      collapsibleExpand1: false,
      collapsibleClick2: true,
      collapsibleExpand2: true,
      collapsibleClick3: false,
      collapsibleExpand3: false,
      collapsibleClick4: false,
      collapsibleExpand4: false,
     });
  }

  _handleCollapsibleClick3 = () => {
    this.setState({
      collapsibleClick1: false,
      collapsibleExpand1: false,
      collapsibleClick2: false,
      collapsibleExpand2: false,
      collapsibleClick3: true,
      collapsibleExpand3: true,
      collapsibleClick4: false,
      collapsibleExpand4: false,
     });
  }

  _handleCollapsibleClick4 = () => {
    this.setState({
      collapsibleClick1: false,
      collapsibleExpand1: false,
      collapsibleClick2: false,
      collapsibleExpand2: false,
      collapsibleClick3: false,
      collapsibleExpand3: false,
      collapsibleClick4: true,
      collapsibleExpand4: true,
     });
  }

  // helper function to be passed down as props to the child component (searchBox)
  // we need to retrieve the exact final input of what was rendered in that searchBox

  _getInputLocation = (event) => {

      let value = event.target.value;

      this.setState({currentLocationInput: value})

      console.log(value)


  }

  render() {
    const {listNum1, listNum2, listNum3, listNum4} = this.state
    const {deliveryDate, deliveryTime, pickupDate, pickupTime, productData} = this.state

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
                <Date data={pickupDate} saveData={this._savePickupDate} className="new-order-date"/>
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
              <div className="popout-panels">
                <Col s={6} className='neworder-white-line'>
                  <Collapsible popout className="new-order-product-description">
                    <CollapsibleItem expanded={this.state.collapsibleExpand1} onClick={this._handleCollapsibleClick1} header={productData[0].title} icon='whatshot'>
                      <Row>
                        <Col s={8}>
                          {productData[0].description}
                          <div className="bbq-quantity">
                            <Row>
                              <Input s={12} type='select' label="Quantity" defaultValue='0'>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                              </Input>
                            </Row>
                          </div>
                        </Col>
                        <Col s={4}>
                          <img alt='' className="new-order-images" src={productData[0].imageFrontUrl} />
                          <img alt='' className="new-order-images" src={productData[0].imageOpenUrl} />
                        </Col>
                    </Row>
                    </CollapsibleItem>
                    <CollapsibleItem expanded={this.state.collapsibleExpand2} onClick={this._handleCollapsibleClick2} header={productData[1].title} icon='whatshot'>
                      <Row>
                        <Col s={8}>
                          {productData[1].description}
                          <div className="bbq-quantity">
                            <Row>
                              <Input s={12} type='select' label="Quantity" defaultValue='0'>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                              </Input>
                            </Row>
                          </div>
                        </Col>
                        <Col s={4}>
                          <img alt='' className="new-order-images" src={productData[1].imageFrontUrl} />
                          <img alt='' className="new-order-images" src={productData[1].imageOpenUrl} />
                        </Col>
                    </Row>
                    </CollapsibleItem>
                    <CollapsibleItem expanded={this.state.collapsibleExpand3} onClick={this._handleCollapsibleClick3} header={productData[2].title} icon='whatshot'>
                      <Row>
                        <Col s={8}>
                          {productData[2].description}
                          <div className="bbq-quantity">
                            <Row>
                              <Input s={12} type='select' label="Quantity" defaultValue='0'>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                              </Input>
                            </Row>
                          </div>
                        </Col>
                        <Col s={4}>
                          <img alt='' className="new-order-images" src={productData[2].imageFrontUrl} />
                          <img alt='' className="new-order-images" src={productData[2].imageOpenUrl} />
                        </Col>
                    </Row>
                    </CollapsibleItem>
                    <CollapsibleItem expanded={this.state.collapsibleExpand4} onClick={this._handleCollapsibleClick4} header={productData[3].title} icon='whatshot'>
                      <Row>
                        <Col s={8}>
                          {productData[3].description}
                          <div className="bbq-quantity">
                            <Row>
                              <Input s={12} type='select' label="Quantity" defaultValue='0'>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                              </Input>
                            </Row>
                          </div>
                        </Col>
                        <Col s={4}>
                          <img alt='' className="new-order-images" src={productData[3].imageFrontUrl} />
                          <img alt='' className="new-order-images" src={productData[3].imageOpenUrl} />
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
              <Map ref="location" onInput={this._getInputLocation} value={this.currentLocationInput} />
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
                <p>drop off date: {masterDeliveryDate}</p>
                <p>drop off time: {masterDeliveryTime}</p>
                <p>pick up date: {masterPickupDate}</p>
                <p>pick up time: {masterPickupTime}</p>
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
