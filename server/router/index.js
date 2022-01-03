const express = require('express');
const router = express.Router();

const articleRouter = require('./article');
const followRouter = require('./follow');
const userRouter = require('./user');

router.use('/user', userRouter);
router.use('/follow', followRouter);
router.use('/article', articleRouter);

module.exports = router;
