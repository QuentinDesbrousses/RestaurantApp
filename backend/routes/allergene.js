const express = require('express');
const router = express.Router();

const allergeneContr = require('../controllers/allergene');

router.get('/allergene', allergeneContr.getAllAllergene);
router.get('/allergene/:id',allergeneContr.getAllergene)
router.post('/allergene', allergeneContr.createIngredient);
router.put('/allergene/:id', allergeneContr.modifyAllergene);
router.delete('/allergene/:id', allergeneContr.deleteAllergene);

module.exports = router;