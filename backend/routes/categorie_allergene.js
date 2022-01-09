const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const categorie_alContr = require('../controllers/categorie_allergene');

router.get('/',categorie_alContr.getAllCat_Allergene);
router.get('/:id',categorie_alContr.getCat_Allergene);
router.post('/',categorie_alContr.createCat_Allergene);
router.put('/:id',categorie_alContr.modifyCat_Allergene);
router.delete('/:id',categorie_alContr.deleteById);
router.delete('/', categorie_alContr.deleteCat_Allergene);

module.exports = router;