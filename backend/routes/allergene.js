const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const allergeneContr = require('../controllers/allergene');

router.get('/', auth, allergeneContr.getAllAllergene);
router.get('/:id',auth,allergeneContr.getAllergene);
router.post('/',auth, allergeneContr.createAllergene);
router.put('/:id',auth, allergeneContr.modifyAllergene);
router.delete('/:id',auth, allergeneContr.deleteById);
router.delete('/',auth, allergeneContr.deleteAllergene);

module.exports = router;