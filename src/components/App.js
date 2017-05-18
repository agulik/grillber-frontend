import React, { Component } from 'react';
import api from '../api';
// import { Link } from 'react-router';

// import Map from './elements/Map.js'

// import DateTime from './elements/DateTime.js'
// import Time from './elements/Time.js'
// import Date from './elements/Date.js'

// import './App.css';


class App extends Component {

  componentDidMount() {
    if(localStorage.token) {
      api.getUser()
      .then((user) => console.log(user)
      // {
      //   this.setState({
      //     user: user
      //   })
      // }
    )
    }
  }


  render() {
    return (
      <div className="App">
      {/* <Map /> */}
      {/* <Date /> */}
      {/* <Time /> */}
      {/* <DateTime /> */}
      </div>
    );
  }
}

export default App;
