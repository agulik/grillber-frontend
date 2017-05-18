import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class CardCheckout extends Component {
  onToken = (token) => {
    alert('Payment Accepted!');
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  }

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_2WbdoWHaHX65qr9AR4tUcWpr"
      />
    )
  }
}
