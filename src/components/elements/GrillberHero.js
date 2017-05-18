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
                <CardPanel className="teal lighten-4 black-text">
                    <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                </CardPanel>
              </Col>
              <Col s={4}>
                <CardPanel className="teal lighten-4 black-text">
                    <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                </CardPanel>
              </Col>
              <Col s={4}>
                <CardPanel className="teal lighten-4 black-text">
                    <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                </CardPanel>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>

    </div>
  </div>
);
