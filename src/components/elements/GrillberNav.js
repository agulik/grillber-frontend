import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import {Icon, Col, Row, Modal} from 'react-materialize';
import auth from '../../auth';
import './GrillberNav.css';



export default class GrillberNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleLogout = () => {
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
            <a href="/"><h2>Grillber</h2></a>
            <Modal
              trigger={< a href='' onClick={() => this.props._handleMenuClick()}><Icon>menu</Icon></a>}>
              <div className="close modal-action modal-close">
                <Icon>close</Icon>
              </div>
              <a href=''><p>FAQ</p></a>
              <a href=''><p>Settings</p></a>
              <a href='' onClick={this._handleLogout}><p>Logout</p></a>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
