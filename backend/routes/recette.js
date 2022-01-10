const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const recetteContr = require('../controllers/recette');

router.get('/', recetteContr.getAllRecette);
router.get('/etapeRecette/:id',recetteContr.getEtapeByRecette);
router.get('/:id',recetteContr.getRecette);
router.post('/', recetteContr.createRecette);
router.put('/:id', recetteContr.modifyRecette);
router.delete('/:id',recetteContr.deleteById);
router.delete('/', recetteContr.deleteRecette);
router.get('/recetteByRecette/:id',recetteContr.getRecetteComposeIdByRecette);

module.exports = router;