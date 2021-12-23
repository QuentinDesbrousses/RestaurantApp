const express = require('express');
const router = express.Router();

const etapeContr = require('../controllers/etape');

router.get('/', etapeContr.getAllEtape);
router.get('/:id',etapeContr.getEtape);
router.post('/', etapeContr.createEtape);
router.put('/:id', etapeContr.modifyEtape);
router.delete('/:id', etapeContr.deleteById);
router.delete('/', etapeContr.deleteEtape);

module.exports = router;