const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ingredientContr = require('../controllers/ingredient');

router.get('/', auth,ingredientContr.getAllIngredient);
router.get('/:id',auth,ingredientContr.getIngredient);
router.post('/', auth,ingredientContr.createIngredient);
router.put('/:id', auth,ingredientContr.modifyIngredient);
router.delete('/:id', auth,ingredientContr.deleteById);
router.delete('/',auth, ingredientContr.deleteIngredient);

module.exports = router;