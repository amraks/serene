import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

const App = function() {
    return <div><button className="btn btn-default">Hi</button></div>;
}

ReactDOM.render(<App />, document.querySelector(".app"));
