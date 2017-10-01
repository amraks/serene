import React from 'react';
import { Button, Form, FormControl, FormGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { doLogin, doLogout } from '../actions/userActions';
import { SignUp } from '../containers/signup';
import { Login } from '../containers/login';

class Header extends React.Component {
  constructor(props, context) {
    console.log('header constructor');
    super(props, context);
    this.state = {'showLoginModal' : false, 'showSignUpModal' : false};
    this.displayLoginModal = this.displayLoginModal.bind(this);
    this.displaySignUpModal = this.displaySignUpModal.bind(this);
    this.getLoginModalState = this.getLoginModalState.bind(this);
    this.setLoginModalState = this.setLoginModalState.bind(this);
  }

  setLoginModalState() {
    this.setState({'showLoginModal' : false});
  }

  displayLoginModal() {
    this.setState({'showLoginModal' : true, 'showSignUpModal' : false});
  }

  displaySignUpModal() {
    this.setState({'showLoginModal' : false, 'showSignUpModal' : true});
  }

  getLoginModalState() {
    return this.state.showLoginModal;
  }

  render() {
    console.log('header render');
    if (this.props.user) {
      return (
        <Navbar inverse fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Serene</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown title={this.props.user} id="basic-nav-dropdown">
                <MenuItem>Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem onClick={() => this.props.doLogout()}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }

    return (
      <Navbar inverse fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Serene</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Button type="button" onClick={this.displayLoginModal}>Login</Button>
            <Login showLoginCallback={this.getLoginModalState} setLoginModalStateCallback={this.setLoginModalState} />
            <Button type="button" onClick={this.displaySignUpModal}>SignUp</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ doLogin: doLogin, doLogout: doLogout } , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
