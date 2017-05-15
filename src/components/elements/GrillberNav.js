import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import './GrillberNav.css';

export default (props) => (
  <div className='nav'>
    <Navbar brand='Grillber' right className="z-depth-0">
      <NavItem href='get-started.html'><Icon>menu</Icon></NavItem>
    </Navbar>
  </div>
);
