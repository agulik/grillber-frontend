/* eslint no-console:0 */
import 'rc-time-picker/assets/index.css'; // Change CSS to match the date compenent

import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
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
        defaultValue={now}
        className="xxx"
        format={format}
        use12Hours
      />
    );
  }
}

export default Time;
