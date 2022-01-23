const router = require('express').Router();
const controller = require('../controller/search');

router.get('/book', controller.get);

module.exports = router;
