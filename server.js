const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

// if we are not in development or testing
// load the .env into environemt
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// gives us the stripe library so we can make charges
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// instantiate a new express application
const app = express();
// port either process.env.PORT or port 5000
const port = process.env.PORT || 5000;

// process the body and convert to json
app.use(bodyParser.json());
// makes sure urls are encoded
app.use(bodyParser.urlencoded({ extended: true }));
// allows us to make backend requests
app.use(cors());

// if we're in production
if (process.env.NODE_ENV === 'production') {
  // optimise and enforce security measures
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  // serves all the static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // gets all urls
  app.get('*', function(req, res) {
    // sends all files
    // index.html is the base file
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// listen on port 5000
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

// whenever the service-worker is requested send the service-worker file
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

// creates the payment route
// creates body object
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  // passes the body object
  // returns res depending on whether payment is successful or not
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});