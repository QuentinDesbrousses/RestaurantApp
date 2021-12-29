const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const categorie_alContr = require('../controllers/categorie_allergene');

router.get('/', auth, categorie_alContr.getAllCat_Allergene);
router.get('/:id', auth,categorie_alContr.getCat_Allergene);
router.post('/', auth,categorie_alContr.createCat_Allergene);
router.put('/:id', auth,categorie_alContr.modifyCat_Allergene);
router.delete('/:id', auth,categorie_alContr.deleteById);
router.delete('/',auth, categorie_alContr.deleteCat_Allergene);

module.exports = router;