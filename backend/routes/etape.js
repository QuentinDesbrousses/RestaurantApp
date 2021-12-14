const express = require('express');
const router = express.Router();

const etapeContr = require('../controllers/etape');

router.get('/etape', etapeContr.getAllEtape);
router.get('/etape/:id',etapeContr.getEtape);
router.post('/etape', etapeContr.createEtape);
router.put('/etape/:id', etapeContr.modifyEtape);
router.delete('/etape/:id', etapeContr.deleteEtape);

module.exports = router;