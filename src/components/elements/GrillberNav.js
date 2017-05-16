import React from 'react';
import {Icon, Col, Row} from 'react-materialize';
import './GrillberNav.css';

export default (props) => (
  <div className='nav'>
      <Row>
        <Col s={12}>
          <h2>Grillber</h2>
          <a href=''><Icon onClick={() => props._handleMenuClick()} className="menu">menu</Icon></a>
        </Col>
      </Row>
  </div>
);
