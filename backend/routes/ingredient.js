const express = require('express');
const router = express.Router();

const ingredientContr = require('../controllers/ingredient');

router.get('/ingredient', ingredientContr.getAllIngredient);
router.get('/ingredient/:id',ingredientContr.getIngredient)
router.post('/ingredient', ingredientContr.createIngredient);
router.put('/ingredient/:id', ingredientContr.modifyIngredient);
router.delete('/ingredient/:id', ingredientContr.deleteIngredient);

module.exports = router;