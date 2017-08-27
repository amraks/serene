import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                    	<form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);
