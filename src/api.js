import superagent from 'superagent';
import { API_HOST } from './config';

class Api {

  requestSignUp = (firstName, lastName, phone, email, password) => (
    superagent
    .post(`${API_HOST}/auth/users`)
    .send({ firstName, lastName, phone, email, password })
    .catch((e) => {
      console.log('error', e)
    })
  )

  requestLogin = (email, password) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ email, password })
  )

  requestLogout = (token) => (
    superagent
    .del(`${API_HOST}/auth/sessions`)
    .set('Authorization', `token ${token}`)
  )

  getUser = (token) => {
    return superagent
    .get(`${API_HOST}/auth/me`)
    // .send({token})
    // .set('Authorization', `token ${token}`)
    // .set('Accept', 'application/json')
  }

  requestSchedule = (time, date) => (
    superagent
    .post(`${API_HOST}/auth/sessions`)
    .send({ time, date })
  )

}

export default new Api();
