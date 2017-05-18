import React, { Component } from 'react';
import api from '../api';

import './App.css';

class App extends Component {



  componentDidMount() {
    let token = localStorage.token;
    if(token) {
      api.getUser(token)
      .then((user) =>
      {
        this.setState({
          user: user.body
        })
      }
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
