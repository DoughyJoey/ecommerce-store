const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');

// create express app
const app = express();

// parses body using json
app.use(bodyParser.json());

// uses cors
app.use(cors());

// sets all of the headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// used for testing
// check if server is working
app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

// set port to 3030
app.listen(3030, '0.0.0.0');


// creates the route
app.post('/api/email', (req, res, next) => {

    // used for debugging
    console.log(req.body);

    // sets api key to our encrypted secret api key
    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    // creates the message object
    const msg = {
        to: 'yosen91@hotmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    // sents message using
    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            });
        });
});

