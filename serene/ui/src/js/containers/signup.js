import React from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unloadLoginModal, loadSignUpModal, unloadSignUpModal } from '../actions/modalPopUpActions';
import { doSignUp } from '../actions/userActions';

export class SignUp extends React.Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      name : '',
      email : '',
      passwd : '',
      verifyPasswd : ''
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    console.log('signup submit');
    this.props.doSignUp(this.state.name, this.state.email, this.state.passwd, this.state.verifyPasswd);
  }

  onFieldChange(e) {
    e.preventDefault();
    let state = Object.assign({}, this.state);
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    console.log('load sign up modal render');
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
          isOpen={this.props.showSignUp}
          style={customStyles}
          onRequestClose={this.props.unloadSignUpModal}
        >
          <h2>SignUp!</h2>
          <form onSubmit={this.handleSignUp.bind(this)}>
            Name: <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} /><br />
            Email: <input type="text" name="email" value={this.state.email} onChange={this.onFieldChange} /><br />
            Password: <input type="password" name="passwd" value={this.state.passwd} onChange={this.onFieldChange} /><br />
            Verify Password: <input type="password" name="verifyPasswd" value={this.state.verifyPasswd} onChange={this.onFieldChange} /><br />
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showSignUp : state.ui.showSignUpModal
  }
}

function matchDispatchToProps(dispatch) {
  const mapping = {
    unloadSignUpModal : unloadSignUpModal,
    doSignUp : doSignUp
  };
  return bindActionCreators(mapping, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
