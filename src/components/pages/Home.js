import React, {Component} from 'react';
import {Button, Icon, Modal} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import './Home.css';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  _handleMenuClick = () => {
    let {isMenuOpen} = this.state;
    console.log("YOOOOOOOO !!!!");

    this.setState({ isMenuOpen: !isMenuOpen })
  }

  closeMenu = () => this.setState({ isMenuOpen: false })

  render() {

    let {isMenuOpen} = this.state

    return (
      <div className="home">
        <GrillberNav _handleMenuClick={this._handleMenuClick} closeMenu={this.closeMenu} />
      </div>
    );
  }

}
