import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';


import './index.css';

// routes explained

// App = main App
// Home = main dashboard page
// LandingPage = redirect if not logged in
// LearnMore = panel state load for more info
// Login = panel state load if 'already have an account'
// Orders = previous orders / create new order page
// NewOrder = step 1 of new order page


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
            <Route path="auth" component={LandingPage}>
              <Route path="auth/learn-more" component={Home} />
              <Route path="auth/login" component={Home} />
            </Route>
            <Route path="home/orders" component={Home}>
              <Route path="home/new-order" component={Home} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
