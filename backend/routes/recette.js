const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const recetteContr = require('../controllers/recette');

router.get('/',auth, recetteContr.getAllRecette);
router.get('/:id',auth,recetteContr.getRecette);
router.post('/',auth, recetteContr.createRecette);
router.put('/:id',auth, recetteContr.modifyRecette);
router.delete('/:id', auth,recetteContr.deleteById);
router.delete('/',auth, recetteContr.deleteRecette);

module.exports = router;