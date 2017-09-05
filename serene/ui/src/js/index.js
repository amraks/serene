import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
//import { Router, Route, browserHistory, Link } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import { App } from './components/app';
import { SignUp } from './containers/signup';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>,
    document.querySelector('.app')
)
