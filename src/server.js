'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const usersRoute = require('./routes/user.route');
//middleware requirment
const logger = require('./middleware/logger');
// error handlers requirement
const notFoundError = require('./error-handlers/404');
const internalError = require('./error-handlers/500');

// Stuff used

app.use(express.json());
app.use(logger);
app.use(usersRoute);
app.use('*', notFoundError);
app.use(internalError);

//start Function

function start(PORT) {
  app.listen(PORT);
  console.log('Server is listening on port ', PORT);
}
module.exports = {
  app,
  start,
};
