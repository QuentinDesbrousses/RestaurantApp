const express = require('express');
const pool = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
//const ingredientRoute = require('./routes/ingredient');
const utilisateurRoute = require('./routes/utilisateur');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//app.use('/ingredient',ingredientRoute);
app.use('/utilisateur',utilisateurRoute);

module.exports = app;