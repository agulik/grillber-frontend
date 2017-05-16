import React from 'react';
import {Icon, Col, Row, Modal} from 'react-materialize';
import './GrillberNav.css';

export default(props) => (
  <div className='nav'>
    <Row>
      <Col s={12}>
        <h2>Grillber</h2>
        <Modal
          trigger={< a href='' onClick={() => props._handleMenuClick()}><Icon>menu</Icon></a>}>
          <div className="close" onClick={() => props.closeMenu()}>
            <Icon>close</Icon>
          </div>
          <a href=''><p>FAQ</p></a>
          <a href=''><p>Settings</p></a>
          <a href=''><p>Logout</p></a>
        </Modal>
      </Col>
    </Row>
  </div>
);
