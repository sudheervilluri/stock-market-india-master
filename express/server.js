'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/users', (req, res) => {
  res.json({
    users: [
      {
        name: 'steve',
      },
      {
        name: 'joe',
      },
    ],
  })
})
router.post('/', (req, res) => res.json({ postBody: req.body }));

// Attach logger
app.use(morgan(customLogger))

// Setup routes
app.use(routerBasePath, router)

// Apply express middlewares
router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

return app
