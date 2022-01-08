const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const allergeneContr = require('../controllers/allergene');

router.get('/', allergeneContr.getAllAllergene);
router.get('/:id',allergeneContr.getAllergene);
router.post('/', allergeneContr.createAllergene);
router.put('/:id', allergeneContr.modifyAllergene);
router.delete('/:id', allergeneContr.deleteById);
router.delete('/', allergeneContr.deleteAllergene);


module.exports = router;