const router = require('express').Router();
const controller = require('../controller/follow');

router.post('/:user_Id', controller.post); // follow 생성
router.delete('/:user_Id', controller.delete); // follow 삭제

module.exports = router;
