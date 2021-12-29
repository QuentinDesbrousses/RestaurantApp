const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const categorie_ingrContr = require('../controllers/categorie_ingredient');

router.get('/', auth,categorie_ingrContr.getAllCat_Ingredient);
router.get('/:id',auth,categorie_ingrContr.getCat_Ingredient);
router.post('/', auth,categorie_ingrContr.createCat_Ingredient);
router.put('/:id', auth,categorie_ingrContr.modifyCat_Ingredient);
router.delete('/:id', auth,categorie_ingrContr.deleteById);
router.delete('/', auth,categorie_ingrContr.deleteCat_Ingredient);

module.exports = router;
