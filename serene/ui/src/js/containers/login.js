import React from 'react';
import { Modal, Button, Popover, Navbar, Tooltip, OverlayTrigger, Form, FormGroup, FormControl, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unloadLoginModal, loadSignUpModal, unloadSignUpModal } from '../actions/modalPopUpActions';

export class Login extends React.Component {

  constructor(props, ctx) {
      super(props);
      console.log('login constructor called');
      this.login = this.login.bind(this);
  }

  login() {
    console.log('Logging user in');
    console.log('email:', this.refs.email.value);
    console.log('passwd:', this.refs.password.value);
  }

  render() {
    console.log('Login modal render');
    return (
      <Modal show={this.props.showLogin} onHide={this.props.unloadLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log into your account!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Navbar.Form>
            <Form horizontal onSubmit={this.login}>
              <FormGroup>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Email" ref="email" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" ref="password" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10}>
                  <Button type="submit">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Navbar.Form>
          <div>
            Don't have an account?<Button type="button" onClick="this.props.loadSignUpModal">Sign Up</Button>
          </div>
        </Modal.Body>
      </Modal> 
    ) 
  }
}

function mapStateToProps(state) {
  return {
    showLogin : state.ui.showLoginModal
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ unloadLoginModal : unloadLoginModal, loadSignUpModal : loadSignUpModal} , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
