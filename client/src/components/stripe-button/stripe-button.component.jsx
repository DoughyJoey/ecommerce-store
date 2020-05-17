import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_7LJMis4lmRQZd6bskKx5qLlt00rczSssfL';

  // creates token we can send to the backend server
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
    // successful response
      .then(response => {
        alert('succesful payment');
      })
      // error response
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    // properties are provided by stripe checkout library
    <StripeCheckout
      label='Pay Now'
      name='Shome Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      // sets token to onToken we created
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};


export default StripeCheckoutButton;