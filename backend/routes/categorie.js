const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const categorieContr = require('../controllers/categorie');

router.get('/', auth,categorieContr.getAllCategorie);
router.get('/:id',auth,categorieContr.getCategorie);
router.post('/', auth,categorieContr.createCategorie);
router.put('/:id',auth, categorieContr.modifyCategorie);
router.delete('/:id', auth,categorieContr.deleteById);
router.delete('/',auth, categorieContr.deleteCategorie);

module.exports = router;