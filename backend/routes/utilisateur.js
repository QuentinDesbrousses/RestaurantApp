const express = require('express');
const router = express.Router();

const utilisateurContr = require('../controllers/utilisateur');

router.get('/utilisateur', utilisateurContr.getAllUtilisateur);
router.get('/utilisateur/:id',utilisateurContr.getUtilisateur);
router.post('/utilisateur', utilisateurContr.createUtilisateur);
router.put('/utilisateur/:id', utilisateurContr.modifyUtilisateur);
router.delete('/utilisateur/:id', utilisateurContr.deleteUtilisateur);

module.exports = router;