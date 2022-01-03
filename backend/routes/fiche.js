const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ficheContr = require('../controllers/fiche');

router.get('/',ficheContr.getAllFiche);
router.get('/:id',ficheContr.getFiche);
router.post('/', ficheContr.createFiche);
router.put('/:id', ficheContr.modifyFiche);
router.delete('/:id', ficheContr.deleteById);
router.delete('/', ficheContr.deleteFiche);

module.exports = router;