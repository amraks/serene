import React from 'react';
import { Button, Popover, Navbar, Tooltip, OverlayTrigger, Form, FormGroup, FormControl, Col} from 'react-bootstrap';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unloadLoginModal, loadSignUpModal, unloadSignUpModal } from '../actions/modalPopUpActions';
import { doLogin } from '../actions/userActions';

export class Login extends React.Component {

  constructor(props, ctx) {
      super(props);
      console.log('login constructor called');
      this.login = this.login.bind(this);
      this.onFieldChange = this.onFieldChange.bind(this);
      this.state = {
        email : '',
        passwd : ''
      }
  }

  login(e) {
    e.preventDefault();
    console.log('Logging user in');
    console.log('email:', this.state.email);
    console.log('passwd:', this.state.passwd);
    this.props.doLogin(this.state.email, this.state.passwd);
  }

  onFieldChange(e) {
    //e.preventDefault();
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
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
    const { email, passwd} = this.state;
    return (
      <div>
        <Modal
          isOpen={this.props.showLogin}
           onRequestClose={this.props.unloadLoginModal}
           style={customStyles}
        >
        <h2>Login</h2>
          <form onSubmit={this.login}>
            Email: <input type="text" name="email" value={email} onChange={this.onFieldChange} /><br />
            Password: <input type="password" name="passwd" value={passwd} onChange={this.onFieldChange} />
            <input type="submit" value="Submit" />
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
  const actionCreatorsMapping = {
    unloadLoginModal : unloadLoginModal,
    loadSignUpModal : loadSignUpModal
    doLogin : doLogin
  }
  return bindActionCreators(actionCreatorsMapping, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
