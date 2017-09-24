import React from 'react';
import { Button, Form, FormControl, FormGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { doLogout } from '../actions/userActions';
import { SignUp } from '../containers/signup';
import { Login } from '../containers/login';
import { loadLoginModal, unloadLoginModal, loadSignUpModal, unloadSignUpModal } from '../actions/modalPopUpActions';

class Header extends React.Component {
  constructor(props, context) {
    console.log('header constructor');
    super(props, context);
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
            <Button type="button" onClick={this.props.loadLoginModal}>Login</Button>
            <Login />
            <Button type="button" onClick={this.props.loadSignUpModal}>SignUp</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    showLogin : state.ui.showLoginModal
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ loadLoginModal : loadLoginModal, doLogout: doLogout, loadSignUpModal : loadSignUpModal } , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
