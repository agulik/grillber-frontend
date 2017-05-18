import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import Profile from './components/pages/Profile';
import Orders from './components/pages/Orders';
import NewOrder from './components/pages/NewOrder';



import './index.css';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
            <Route path="auth" component={SignupPage} />
            <Route path="/auth/signup" component={SignupPage} />
            <Route path="/auth/login" component={LoginPage} />
            <Route path="/auth/me" component={Profile} />
            <Route path="settings" component={Settings} />
            <Route path="orders" component={Orders}>
              <Route path="orders/new" component={NewOrder} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
