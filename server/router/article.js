const router = require('express').Router();
const controller = require('../controller/article');

router.post('/:userId', controller.post); // 회원 정보 조회
router.patch('/:articleId', controller.patch); // 회원 정보 수정
router.delete('/:articleId', controller.delete); // 회원 정보 수정

module.exports = router;
