import api from './api';

module.exports = {

  signup(firstName, lastName, phone, email, password) {
    if (localStorage.user) {
      throw new Error('User already exists!');
    } else {
      return api.requestSignUp(firstName, lastName, phone, email, password);
    }
  },

  login(email, pass) {
      return api.requestLogin(email, pass)
      .then(res => localStorage.token = res.body.token)
  },
  //
  // getToken() {
  //   return localStorage.token
  // },
  //
  logout() {
    return api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token);
  },
  //
  // isLoggedIn() {
  //   return !!localStorage.token
  // },

};
