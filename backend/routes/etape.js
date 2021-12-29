const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const etapeContr = require('../controllers/etape');

router.get('/', auth,etapeContr.getAllEtape);
router.get('/:id',auth,etapeContr.getEtape);
router.post('/', auth,etapeContr.createEtape);
router.put('/:id', auth,etapeContr.modifyEtape);
router.delete('/:id', auth,etapeContr.deleteById);
router.delete('/', auth,etapeContr.deleteEtape);

module.exports = router;