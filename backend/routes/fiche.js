const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ficheContr = require('../controllers/fiche');

router.get('/',ficheContr.getAllFiche);
router.get('/:id',ficheContr.getFiche);
router.post('/',auth, ficheContr.createFiche);
router.put('/:id',auth, ficheContr.modifyFiche);
router.delete('/:id',auth, ficheContr.deleteById);
router.delete('/',auth, ficheContr.deleteFiche);

module.exports = router;