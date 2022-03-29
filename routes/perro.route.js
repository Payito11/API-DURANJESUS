const express = require('express');
const router = express.Router();
const perroController = require('../controller/perro.controller');

router.get('/', perroController.getPerro);
router.get('/',perroController.addPerro);
module.exports = router;