import React from 'react';
import {Icon, Col, Row, Modal, Button} from 'react-materialize';
import './GrillberHero.css';

export default(props) => (
  <div className="grillber-hero-background">
    <h2>Grillber</h2>
    <p className="tagline">BBQ delivery service at the touch of a button</p>
    <div className="button-div">
      <Button>learn more</Button>
    </div>
  </div>
);
