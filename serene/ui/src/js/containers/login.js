import React from 'react';
import { Button, Popover, Navbar, Tooltip, OverlayTrigger, Form, FormGroup, FormControl, Col} from 'react-bootstrap';
import Modal from 'react-modal';
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
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    return (
      <div>
        <Modal
          isOpen={this.props.showLogin}
           onRequestClose={this.props.unloadLoginModal}
           style={customStyles}
        >
        <h2>Login</h2>
          <form>
            Email: <input type="text" name="Email" /><br />
            Password: <input type="password" name="password" />
          </form>
        </Modal> 
      </div>
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
