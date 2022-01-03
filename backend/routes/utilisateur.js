const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const utilisateurContr = require('../controllers/utilisateur');

router.get('/', utilisateurContr.getAllUtilisateur); //selectionner tous les utilisateurs
router.get('/:id',utilisateurContr.getUtilisateur); //selectionner un utilisateur par son id
router.post('/inscription',utilisateurContr.createUtilisateur); //creer un nouvel utilisateur
router.put('/:id',utilisateurContr.modifyUtilisateur); //modifier un utilisateur en ayant son id
router.delete('/', utilisateurContr.deleteUtilisateur); //supprimer un utilisateur selon certaines conditions
router.delete('/:id',utilisateurContr.deleteById);  //supprimer un utilisateur par son id
router.post('/connexion',utilisateurContr.login)

module.exports = router;