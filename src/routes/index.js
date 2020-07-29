const { Router } = require('express');
const getServerCount = require('../controller');
const inputValidator = require('../middleware/inputValidator');

const router = Router();


router.route('/calculate').post(inputValidator, getServerCount);

module.exports = router;