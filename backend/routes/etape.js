const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const etapeContr = require('../controllers/etape');

router.get('/', etapeContr.getAllEtape);
router.get('/etaperecette/:id', etapeContr.getIngredientByEtape);
router.get('/:id',etapeContr.getEtape);
router.post('/',etapeContr.createEtape);
router.put('/:id',etapeContr.modifyEtape);
router.delete('/:id',etapeContr.deleteById);
router.delete('/',etapeContr.deleteEtape);
router.get('/ingredientpretape/:id',etapeContr.getIngredientByEtape);

module.exports = router;