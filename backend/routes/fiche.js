const express = require('express');
const router = express.Router();

const ficheContr = require('../controllers/fiche');

router.get('/fiche', ficheContr.getAllFiche);
router.get('/fiche/:id',ficheContr.getFiche);
router.post('/fiche', ficheContr.createFiche);
router.put('/fiche/:id', ficheContr.modifyFiche);
router.delete('/fiche/:id', ficheContr.deleteFiche);

module.exports = router;