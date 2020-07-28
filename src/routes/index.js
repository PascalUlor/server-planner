const { Router } = require('express');
const getServerCount = require('../controller');

const router = Router()


router.route('/').post(getServerCount);

module.exports = router;