const express = require('express')
const router = express.Router();
const {Alert} = require('../controllers/alert')

// define Api
router.post('/alert',Alert);

module.exports = router;
