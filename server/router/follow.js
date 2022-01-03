const router = require('express').Router();
const controller = require('../controller/follow');

router.post('/:userId', controller.post); // follow 생성
router.delete('/:userId', controller.delete); // follow 삭제

module.exports = router;
