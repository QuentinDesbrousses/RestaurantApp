const express = require('express');
const router = express.Router();

const utilisateurContr = require('../controllers/utilisateur');

router.get('/', utilisateurContr.getAllUtilisateur); //selectionner tous les utilisateurs
router.get('/:id',utilisateurContr.getUtilisateur); //selectionner un utilisateur par son id
router.post('/', utilisateurContr.createUtilisateur); //creer un nouvel utilisateur
router.put('/:id', utilisateurContr.modifyUtilisateur); //modifier un utilisateur en ayant son id
router.delete('/', utilisateurContr.deleteUtilisateur); //supprimer un utilisateur selon certaines conditions
router.delete('/:id',utilisateurContr.deleteById);  //supprimer un utilisateur par son id

module.exports = router;