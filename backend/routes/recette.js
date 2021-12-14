const express = require('express');
const router = express.Router();

const recetteContr = require('../controllers/recette');

router.get('/recette', recetteContr.getAllRecette);
router.get('/recette/:id',recetteContr.getRecette);
router.post('/recette', recetteContr.createRecette);
router.put('/recette/:id', recetteContr.modifyRecette);
router.delete('/recette/:id', recetteContr.deleteRecette);

module.exports = router;