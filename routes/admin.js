const express = require('express');
const router = express.Router();

const adminController = require('../controllers/user');

router.get('/',adminController.get);
router.post('/add',adminController.add);

module.exports = router;