import React, {Component} from 'react';
import './HamburgerMenu.css';


export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div>
        <h1>Menu</h1>
        <button onClick={this.props.closeMenu()}>Menu</button>
      </div>
    );
  }
}
