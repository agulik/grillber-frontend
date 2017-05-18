import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import Profile from './components/pages/Profile';
import PlaceOrders from './components/pages/PlaceOrders';
import OrderHistory from './components/pages/OrderHistory';
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
            <Route path="orders" component={PlaceOrders} />
            <Route path="orders/new" component={NewOrder} />
            <Route path="orders/history" component={OrderHistory}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
