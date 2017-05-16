import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Orders from './components/pages/Orders';
import NewOrder from './components/pages/NewOrder';
import LandingPage from './components/pages/LandingPage';


import './index.css';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
            <Route path="auth/" component={LandingPage}>
              <Route path="auth/signup" component={Signup} />
              <Route path="auth/login" component={Login} />
              <Route path="auth/me" component={Profile} />
            </Route>
            <Route path="orders" component={Orders}>
              <Route path="orders/new" component={NewOrder} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
