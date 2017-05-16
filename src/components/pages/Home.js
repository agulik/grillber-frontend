import React, {Component} from 'react';
import {Button, Icon} from 'react-materialize';
import GrillberNav from '../elements/GrillberNav';
import HamburgerMenu from '../modals/HamburgerMenu';
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

    this.setState({ isMenuOpen: !isMenuOpen })
  }

  closeMenu = () => this.setState({ isMenuOpen: false })

  render() {

    let {isMenuOpen} = this.state

    return (
      <div className="home">
        <GrillberNav _handleMenuClick={this._handleMenuClick} />
          { isMenuOpen ? <HamburgerMenu closeMenu={this.closeMenu} /> : null}
      </div>
    );
  }

}
