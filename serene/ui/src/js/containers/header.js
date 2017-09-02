import React from 'react';
import { Button, Form, FormControl, FormGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { doLogin, doLogout } from '../actions/userActions';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
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
            <Navbar inverse fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Serene</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Form pullRight>
                    <form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <FormControl type="text" placeholder="Email" ref="email" />
                            <FormControl type="password" placeholder="Password" ref="password" />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </form>
                </Navbar.Form>
            </Navbar>
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
