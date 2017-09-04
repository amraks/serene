import React from 'react';
import { connect } from 'react-redux';

class SettingsComponent extends React.Component {
    render() {
        return (
            <div><button className="btn btn-default">{this.props.settings[0]}</button></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

const Settings = connect(mapStateToProps)(SettingsComponent);

export default Settings;
