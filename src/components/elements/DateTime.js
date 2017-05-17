import React, { Component } from 'react';
// import { Link } from 'react-router';

import Time from './Time.js'
import Date from './Date.js'


class DateTime extends Component {
  render() {
    return (
      <div>
      <Date />
      <Time />
      </div>
    );
  }
}

export default DateTime;
