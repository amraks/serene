import React from 'react';
import { Button, Form, FormControl, FormGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, } from 'react-router-dom';

import { doLogin, doLogout } from '../actions/userActions';
import { SignUp } from '../containers/signup';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log('header constructor');
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.getSignUpModal = this.getSignUpModal.bind(this);
        this.state = {showSignUpModal: false};
    }

    toggleModal() {
        this.setState({showSignUpModal: !this.state.showSignUpModal})
    }

    getSignUpModal() {
      return this.state.showSignUpModal;
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
            );
        }

        return (
            <div>
      <BrowserRouter>
        <div>
        <Route name="signup" path="/signup" render={()=><SignUp toggleModal={this.toggleModal} showModal={this.getSignUpModal}/>} />
            <Navbar inverse fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Serene</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Form pullRight>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <FormControl type="text" placeholder="Email" ref="email" />
                            <FormControl type="password" placeholder="Password" ref="password" />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                        <Button type="button" onClick={this.toggleModal}>
                          <Link name="signup" to="/signup">Sign Up</Link>
                        </Button>
                    </Form>
                </Navbar.Form>
            </Navbar>
</div>
      </BrowserRouter>
</div>
        );
    }

    handleLogin(event) {
        event.preventDefault();
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        this.props.doLogin(email, password);
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
