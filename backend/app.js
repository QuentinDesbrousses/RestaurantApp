const express = require('express');
const pool = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const ingredientRoute = require('./routes/ingredient');
const utilisateurRoute = require('./routes/utilisateur');
const cat_allergeneRoute = require('./routes/categorie_allergene');
const cat_ingredientRoute = require('./routes/categorie_ingredient');
const allergeneRoute = require('./routes/allergene');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/ingredient',ingredientRoute);
app.use('/utilisateur',utilisateurRoute);
app.use('/cat_allergene',cat_allergeneRoute);
app.use('/cat_ingredient',cat_ingredientRoute);
app.use('/allergene',allergeneRoute);

module.exports = app;