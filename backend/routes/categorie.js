const express = require('express');
const router = express.Router();

const categorieContr = require('../controllers/categorie');

router.get('/categorie', categorieContr.getAllCategorie);
router.get('/categorie/:id',categorieContr.getCategorie);
router.post('/categorie', categorieContr.createCategorie);
router.put('/categorie/:id', categorieContr.modifyCategorie);
router.delete('/categorie/:id', categorieContr.deleteCategorie);

module.exports = router;