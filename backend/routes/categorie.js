const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const categorieContr = require('../controllers/categorie');

router.get('/',categorieContr.getAllCategorie);
router.get('/:id',categorieContr.getCategorie);
router.post('/',categorieContr.createCategorie);
router.put('/:id', categorieContr.modifyCategorie);
router.delete('/:id',categorieContr.deleteById);
router.delete('/', categorieContr.deleteCategorie);

module.exports = router;