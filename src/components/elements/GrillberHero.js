import React from 'react';
import {Icon, Col, Row, Modal, Button, CardPanel} from 'react-materialize';
import './GrillberHero.css';

export default(props) => (
  <div className="grillber-hero-background">
    <h2>Grillber</h2>
    <p className="tagline">BBQ delivery service at the touch of a button</p>
    <div className="button-div">
      <Modal
        trigger={<Button>learn more</Button>}>
        <div className="close modal-action modal-close">
          <Icon>close</Icon>
        </div>
        <div className="learn-more-contents">
          <h2>You ask, we deliver!</h2>
          <p>Throwing the best BBQ on the block has just become easier!</p>
          <div className="panels">
            <Row>
              <Col s={4}>
                <CardPanel className="card-panel">
                    <div className="picCircle">
                      <img src={'http://copy9.com/wp-content/uploads/2015/12/track-someone-mobile-phone.jpg'} alt="convenience" className="learnPic"/>
                    </div>
                    <p className="cardTitle">Convenience</p>
                    <span>Get a BBQ grill and accessories delivered wherever you need at the tap of a button. 
                          Whether it’s a family gathering or a sporting event, we’ve got you covered!</span>
                </CardPanel>
              </Col>
              <Col s={4}>
                <CardPanel className="card-panel">
                    <div className="picCircle">
                      <img src={'http://www.pccorp.com/wp-content/uploads/2014/08/BBQ-2.jpg'} alt="Affordable" className="learnPic"/>
                    </div>
                    <p className="cardTitle">Affordable Luxury</p>
                    <span>We stock only the best quality grills on the market and offer them for hourly or daily rental at a juicy price. </span>
                </CardPanel>
              </Col>
              <Col s={4}>
                <CardPanel className="card-panel">
                    <div className="picCircle">
                      <img src={'http://www.pastbook.com/txt/assets/bbq1.jpg'} alt="Quality" className="learnPic"/>
                    </div>
                    <p className="cardTitle">Quality</p>
                    <span>All grills come pre-inspected with a full tank of propane.
                    We take care of the maintenance so you can focus on the important stuff - like  becoming the next grill boss.</span>
                </CardPanel>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>

    </div>
  </div>
);
