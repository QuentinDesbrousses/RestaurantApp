const express = require('express');
const pool = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const ingredientRoute = require('./routes/ingredient');
const utilisateurRoute = require('./routes/utilisateur');
const cat_allergeneRoute = require('./routes/categorie_allergene');
const cat_ingredientRoute = require('./routes/categorie_ingredient');
const allergeneRoute = require('./routes/allergene');
const etapeRoute = require('./routes/etape');
const recetteRoute = require('./routes/recette');
const ficheRoute = require('./routes/fiche');
const categorieRoute = require('./routes/categorie');


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,x-access-token, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials',true);
  next();      
});

app.use('/ingredient',ingredientRoute);
app.use('/utilisateur',utilisateurRoute);
app.use('/cat_allergene',cat_allergeneRoute);
app.use('/cat_ingredient',cat_ingredientRoute);
app.use('/allergene',allergeneRoute);
app.use('/categorie',categorieRoute);
app.use('/recette',recetteRoute);
app.use('/fiche',ficheRoute);
app.use('/etape',etapeRoute);

module.exports = app;