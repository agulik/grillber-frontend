import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
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
              <Route path="learn-more" component={LearnMore} />
              <Route path="login" component={Login} />
            </Route>
            <Route path="orders" component={Orders}>
              <Route path="new-order" component={NewOrder} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
