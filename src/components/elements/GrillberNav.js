import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import {Icon, Col, Row, Modal} from 'react-materialize';
import auth from '../../auth';
import './GrillberNav.css';



export default class GrillberNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleLogout = (event) => {
    event.preventDefault();

      auth.logout(localStorage)
      .then(localStorage.removeItem('token'))
      .then(res => browserHistory.push('/'))
      .catch(console.error);
    }

  render() {

    return (
      <div className='nav'>
        <Row>
          <Col s={12}>
            <Link to="/"><h2>Grillber</h2></Link>
            <Modal
              trigger={< a href='' onClick={() => this.props._handleMenuClick()}><Icon>menu</Icon></a>}>
              <div className="close modal-action modal-close">
                <Icon>close</Icon>
              </div>
              <Link to="faq" className="close modal-action modal-close faq-link">FAQ</Link>
              <Link to="/user/settings" className="close modal-action modal-close settings-link">Settings</Link>
              <a href='#' onClick={this._handleLogout}><p>Logout</p></a>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
