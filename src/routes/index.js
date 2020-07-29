const { Router } = require('express');
const getServerCount = require('../controller');

const router = Router()


router.route('/calculate').post(getServerCount);

module.exports = router;