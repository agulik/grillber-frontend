import React, {Component} from 'react';
import {Icon, Col, Row, Modal} from 'react-materialize';
import auth from '../../auth';
import './GrillberNav.css';



export default class GrillberNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleLogout = () => {
        if (localStorage.token) {
          auth.logout()
          .then(localStorage.removeItem('token'))
          .catch(console.error);
        }
      else {
        this.setState({ error: "You are not logged in!"});
      }
    }

  render() {

    return (
      <div className='nav'>
        <Row>
          <Col s={12}>
            <a href="/"><h2>Grillber</h2></a>
            <Modal
              trigger={< a href='' onClick={() => this.props._handleMenuClick()}><Icon>menu</Icon></a>}>
              <div className="close modal-action modal-close" onClick={() => this.props.closeMenu()}>
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
