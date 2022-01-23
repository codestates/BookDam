const router = require('express').Router();
const controller = require('../controller/user');

router.post('/login', controller.login); // 로그인
router.post('/logout', controller.logout); // 로그아웃
router.post('/signup', controller.signup); // 회원가입
router.delete('/:user_Id', controller.delete); // 회원탈퇴
router.get('/:user_Id', controller.get); // 회원정보 조회
router.patch('/:user_Id', controller.patch); // 회원정보 수정
router.get('/', controller.search); // 유저 검색
router.post('/validation/:user_Id', controller.validation); // 비밀번호 확인
module.exports = router;
