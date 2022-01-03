const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const categorie_ingrContr = require('../controllers/categorie_ingredient');

router.get('/',categorie_ingrContr.getAllCat_Ingredient);
router.get('/:id',categorie_ingrContr.getCat_Ingredient);
router.post('/',categorie_ingrContr.createCat_Ingredient);
router.put('/:id',categorie_ingrContr.modifyCat_Ingredient);
router.delete('/:id',categorie_ingrContr.deleteById);
router.delete('/',categorie_ingrContr.deleteCat_Ingredient);

module.exports = router;
