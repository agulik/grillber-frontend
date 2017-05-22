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
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
    .then(res => res.body)
  }

  requestAvailableProducts = (deliveryDate) => {
    let token = localStorage.token

    return superagent
    .get(`${API_HOST}/products/availableProducts/${deliveryDate}`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .set('Accept', 'application/json')
    .then(res => res.body)

  }

  getOrderHistory = () => {
    let token = localStorage.token
    return this.getUser(token)
      .then((user) => {
        return superagent
        .get(`${API_HOST}/bookings/${user.users_id}`)
        .send({token})
        .set('Authorization', `token ${token}`)
        .set('Accept', 'application/json')
        .then(res => res.body)
      })
  }

  submitBookingRequest = (productId, dropDate, pickupDate, places, user) => {
    let token = localStorage.token
    console.log(user)
    superagent
    .post(`${API_HOST}/bookings/new`)
    .send({token})
    .set('Authorization', `token ${token}`)
    .send({ userId: user, productId: productId, dropDate: dropDate, pickUpDate: pickupDate, location: places })
    .catch((e) => {
      console.log('error', e)
    })
  }

}

export default new Api();
