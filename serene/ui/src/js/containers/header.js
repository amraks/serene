import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doLogin, doLogout } from '../actions/action_login';

import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
        if (this.props.user) {
            return (
/*
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false">{this.props.user} <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Settings</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#" onClick={() => this.props.doLogout()}>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
*/
                <button type="submit" onClick={() => this.props.doLogout()}>Logout</button>
            );
        }
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <form onSubmit={this.handleLogin} className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" ref="email" className="form-control" placeholder="Email" />
                                <input type="text" ref="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
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
