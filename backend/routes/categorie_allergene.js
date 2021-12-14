const express = require('express');
const router = express.Router();

const categorie_alContr = require('../controllers/categorie_al');

router.get('/categorie_al', categorie_alContr.getAllCategorie_al);
router.get('/categorie_al/:id',categorie_alContr.getCategorie_al);
router.post('/categorie_al', categorie_alContr.createCategorie_al);
router.put('/categorie_al/:id', categorie_alContr.modifyCategorie_al);
router.delete('/categorie_al/:id', categorie_alContr.deleteCategorie_al);

module.exports = router;