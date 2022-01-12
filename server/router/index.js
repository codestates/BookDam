const express = require('express');
const router = express.Router();

const articleRouter = require('./article');
const followRouter = require('./follow');
const userRouter = require('./user');
const searchRouter = require('./search');
const uploadRouter = require('./upload');

router.use('/user', userRouter);
router.use('/follow', followRouter);
router.use('/article', articleRouter);
router.use('/search', searchRouter);
router.use('/upload', uploadRouter);

module.exports = router;
