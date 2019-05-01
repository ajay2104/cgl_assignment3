const express = require('express');
const router = express.Router();

const jsonController = require('../controllers/jsonController');

router.get('/',jsonController.get);
router.post('/add',jsonController.differenceJson);

module.exports = router;