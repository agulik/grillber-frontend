import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import Profile from './components/pages/Profile';
import OrderHistory from './components/pages/OrderHistory';
import NewOrder from './components/pages/NewOrder';
import Settings from './components/pages/Settings';
import Faq from './components/pages/Faq';
import ConfirmedOrderPage from './components/pages/ConfirmedOrderPage'; 



import './index.css';

function requireAuth(nextState, replace, next) {
  if (!localStorage.token) {
    replace({
      pathname: "/auth/signup",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} onEnter={requireAuth}/>
            <Route path="auth" component={SignupPage} />
            <Route path="/auth/signup" component={SignupPage} />
            <Route path="/auth/login" component={LoginPage} />
            <Route path="/auth/me" component={Profile} onEnter={requireAuth} />
            <Route path="orders/new" component={NewOrder} onEnter={requireAuth} />
            <Route path="orders/history" component={OrderHistory} onEnter={requireAuth} />
            <Route path="user/settings" component={Settings} onEnter={requireAuth} />
            <Route path="faq" component={Faq} onEnter={requireAuth}/>
            <Route path="orderconfirmation" component={ConfirmedOrderPage} onEnter={requireAuth} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
