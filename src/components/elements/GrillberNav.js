import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import {Icon, Col, Row, Modal} from 'react-materialize';
import api from '../../api';
import auth from '../../auth';
import './GrillberNav.css';

export default class GrillberNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    let token = localStorage.token;
    if(token) {
      api.getUser(token)
      .then((user) => {
        this.setState({
          user: user
        })
      })
    }
  }

  _handleLogout = (event) => {
    event.preventDefault();

      auth.logout(localStorage)
      .then(localStorage.removeItem('token'))
      .then((res) => {
        console.log("hello")
        browserHistory.push('/auth/login')
        console.log("hello")
      })
      .catch(console.error);
    }

  render() {

    let {user} = this.state

    return (
      <div className='nav'>
        <Row>
          <Col s={12}>
            <Link to="/"><h2>Grillber</h2></Link>
            {/* <p >Welcome {user.users_firstName}!</p> */}
            <Modal
              trigger={< a href='' onClick={() => this.props._handleMenuClick()}><Icon>menu</Icon></a>}>
              <div className="close modal-action modal-close">
                <Icon>close</Icon>
              </div>
              <Link to="faq" className="close modal-action modal-close faq-link">FAQ</Link>
              <Link to="/user/settings" className="close modal-action modal-close settings-link">Settings</Link>
              <a href='#' onClick={this._handleLogout} className="close modal-action modal-close"><p>Logout</p></a>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
