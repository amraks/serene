import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { App } from './components/app';
import { SignUp } from './containers/signup';
import { Login } from './containers/login';
import reducers from './reducers';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route name="index" path="/" component={App} />
          <Route name="signup" path="/signup" component={SignUp} />
          <Route name="login" path="/login" component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}
