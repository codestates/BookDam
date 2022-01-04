const router = require('express').Router();
const controller = require('../controller/article');

router.post('/:userId', controller.post); // article 생성
router.patch('/:articleId', controller.patch); // article 수정
router.delete('/:articleId', controller.delete); // article 삭제

module.exports = router;
