/* eslint no-console:0 */
/* eslint-disable */
import 'rc-time-picker/assets/index.css'; // Change CSS to match the date compenent

import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'HH:mm';
const now = moment().hour(0).minute(0);


class Time extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <TimePicker
        value={this.props.data}
        onChange={this.props.saveData}
        showSecond={false}
        placeholder='Select a time'
        className="xxx"
        format={format}
      />
    );
  }
}

export default Time;
