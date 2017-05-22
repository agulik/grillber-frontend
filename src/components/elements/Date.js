import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css'; // Change CSS to match the time compenent

class Date extends Component {
  render() {
    return <DatePicker
        dateFormat="YYYY/MM/DD"
        selected={this.props.data}
        onChange={this.props.saveData}
        placeholderText="select a date"
    />;
  }
}

export default Date;
