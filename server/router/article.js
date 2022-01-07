const router = require('express').Router();
const controller = require('../controller/article');

router.post('/:user_Id', controller.post); // article 생성
router.get('/:user_Id', controller.get); // article 조회(내가 팔로우한 사람들의 article)
router.patch('/:user_Id', controller.patch); // article 수정
router.delete('/:user_Id', controller.delete); // article 삭제

module.exports = router;
