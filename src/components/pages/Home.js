import React, {Component} from 'react';
import {Button, Icon} from 'react-materialize';
import './Home.css';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {

    return (
      <div className="home">
        <h1> the home page !! :) </h1>
        <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
      </div>
    );
  }

}
