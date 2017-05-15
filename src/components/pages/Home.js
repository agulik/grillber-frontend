import React, {Component} from 'react';
import {Button, Icon} from 'react-materialize';
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
        <GrillberNav />
      </div>
    );
  }

}
