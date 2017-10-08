import React from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unloadLoginModal, loadSignUpModal, unloadSignUpModal } from '../actions/modalPopUpActions';

export class SignUp extends React.Component {

  constructor(props, ctx) {
    super(props, ctx);
  }

  handleSignUp(e) {
    e.preventDefault();
    console.log('signup submit');
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
          <form onsubmit={this.handleSignUp.bind(this)}>
            Name: <input type="text" name="name" /><br />
            Email: <input type="text" name="email" /><br />
            Password: <input type="password" name="passwd" /><br />
            Verify Password: <input type="password" name="vpasswd" /><br />
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
  return bindActionCreators({ unloadSignUpModal : unloadSignUpModal} , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
