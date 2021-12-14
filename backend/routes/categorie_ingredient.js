const express = require('express');
const router = express.Router();

const categorie_ingrContr = require('../controllers/categorie_ingredient');

router.get('/categorie_ingr', categorie_ingrContr.getAllCategorie_ingr);
router.get('/categorie_ingr/:id',categorie_ingrContr.getCategorie_ingr);
router.post('/categorie_ingr', categorie_ingrContr.createCategorie_ingr);
router.put('/categorie_ingr/:id', categorie_ingrContr.modifyCategorie_ingr);
router.delete('/categorie_ingr/:id', categorie_ingrContr.deleteCategorie_ingr);

module.exports = router;
