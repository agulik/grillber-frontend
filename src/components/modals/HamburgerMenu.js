import React, {Component} from 'react';
import {Modal, Button} from 'react-materialize';
import './HamburgerMenu.css';

export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div className="menu">
        <Modal header='Modal Header' trigger={this.props._handleMenuClick()}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Modal>
        <h1>Menu</h1>
        <button onClick={this.props.closeMenu()}>Menu</button>
      </div>
    );
  }
}
