import React, {Component} from 'react';
import {Button, Icon, Modal} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import './Home.css';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="home">
        <GrillberNav _handleMenuClick={this._handleMenuClick} />
      </div>
    );
  }

}
