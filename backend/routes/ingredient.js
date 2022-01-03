const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ingredientContr = require('../controllers/ingredient');

router.get('/', ingredientContr.getAllIngredient);
router.get('/:id',ingredientContr.getIngredient);
router.post('/', ingredientContr.createIngredient);
router.put('/:id',ingredientContr.modifyIngredient);
router.delete('/:id',ingredientContr.deleteById);
router.delete('/', ingredientContr.deleteIngredient);

module.exports = router;