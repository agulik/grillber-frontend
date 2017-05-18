import React, { Component } from 'react';
import api from '../api';
// import { Link } from 'react-router';

import './App.css';

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
        {this.props.children}
      </div>
    );
  }
}

export default App;
