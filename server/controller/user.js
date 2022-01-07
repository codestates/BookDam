const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');

module.exports = {
  login: async (req, res) => { // 로그인
    const userId = req.body.userInfo.userId;
    const password = req.body.userInfo.password;
    const data = req.body.userInfo;
    if (!userId || !password) return res.status(400).json({ message: 'failure' });
    const userData = await UserModel.findOne({
      where: {
        userId: userId
      }
    });
    if (!userData) return res.status(400).json({ message: 'failure' });
    const userPassword = userData.password;
    const same = bcrypt.compareSync(password, userPassword);
    if (!same) {
      return res.status(400).json({ message: 'failure' });
    }
    delete userData.dataValues.password;
    delete userData.dataValues.createdAt;
    delete userData.dataValues.updatedAt;
    const accessToken = jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '3h' });
    res.cookie('jwt', accessToken).status(200).json({ message: 'ok', userInfo: userData });
  },
  logout: async (req, res) => { // 로그아웃
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    const findUser = await UserModel.findOne({
      where: {
        userId: userInfo.userId,
        password: userInfo.userPassword
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    else {
      res.clearCookie('jwt').status(200).json({ message: '로그아웃 되었습니다.' });
    }
  },
  signup: async (req, res) => { // 회원가입
    const userInfo = req.body.userInfo;
    const userId = userInfo.userId;
    const userNickName = userInfo.userNickName;
    const password = userInfo.password;
    if (!userId || !password || !userNickName) return res.status(400).json({ message: 'failure' });
    const encryptedPassowrd = bcrypt.hashSync(password, 10);
    const duplication = await UserModel.findOrCreate({
      where: {
        userId: userId
      },
      defaults: {
        userId: userId,
        userNickName: userNickName,
        password: encryptedPassowrd,
        userImage: 'blahblahblah'
      }
    });
    if (!duplication[1]) {
      return res.status(400).json({ message: '중복된 아이디입니다.' });
    } else {
      const userDate = duplication[0];
      delete userDate.dataValues.password;
      delete userDate.dataValues.createdAt;
      delete userDate.dataValues.updatedAt;
      res.status(200).json({ message: 'success', data: userDate });
    }
  },
  delete: async (req, res) => { // 회원정보 삭제
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    const findUser = await UserModel.findOne({
      where: {
        id: id,
        userId: userInfo.userId
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    const same = bcrypt.compareSync(userInfo.password, findUser.password);
    if (!same) {
      return res.status(400).json({ message: 'failure' });
    }

    // 에러 처리할 수 있도록 await 빼기
    const deleteArticle = await ArticleModel.destroy({
      where: {
        user_id: id
      }
    });
    const deleteFollow = await FollowModel.destroy({
      where: {
        [Op.or]: [
          { user_Id: id },
          { follow_Id: id }
        ]
      }
    });
    const deleteUser = await UserModel.destroy({
      where: {
        id: id
      }
    });
    // article & follow가 없을 경우 아래의 코드로 인해서 error가 발생하기 때문에 제외하면 될 듯합니다.
    // if (!deleteArticle) return res.status(401).json({ message: 'failure2' });
    // if (!deleteFollow) return res.status(401).json({ message: 'failure3' });
    // if (!deleteUser) return res.status(401).json({ message: 'failure4' });
    res.clearCookie('jwt').status(200).json({ message: '유저가 탈퇴되었습니다.' });
  },
  get: async (req, res) => { // 유저 정보 => 응답 성공 시 유저 정보 및 유저가 생성한 article도 같이 리턴해주기
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    const findUser = await UserModel.findOne({
      where: {
        id: id
        // userId: userInfo.userId,
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    delete findUser.dataValues.password;
    delete findUser.dataValues.createdAt;
    delete findUser.dataValues.updatedAt;
    const findFollowing = await FollowModel.findAndCountAll({
      where: {
        user_Id: id
      }
    });
    const findFollower = await FollowModel.findAndCountAll({
      where: {
        follow_Id: id
      }
    });
    const follow = { following: findFollowing.count, follower: findFollower.count };
    const findArtilces = await ArticleModel.findAll({
      attributes: { exclude: ['updatedAt'] },
      where: {
        user_Id: id
      }
    });
    res.status(200).json({ userInfo: findUser, follow, articleData: findArtilces });
  },
  patch: async (req, res) => { // 유저 정보 수정
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const userInfo = req.body.userInfo;
    const userNickName = userInfo.userNickName;
    const password = userInfo.password;
    const userImage = userInfo.userImage; // 유저 이미지는 b
    if (!password || !userNickName) return res.status(400).json({ message: 'failure' });
    UserModel.update({
      userNickName: userNickName,
      password: password,
      userImage: userImage
    },
    {
      where: {
        id: id
      }
    })
      .then(() => {
        UserModel.findAll({
          attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
          where: {
            id: id
          }
        })
          .then((result) => {
            res.status(200).json({ message: 'success', userInfo: result });
          })
          .catch((error) => {
            res.status(401).json({ message: 'failure' });
          });
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure' });
      });
  },
  search: (req, res) => { // follow 하기 위해서 유저 검색
    const name = req.query.name;
    // console.log(name);
    if (!name) return res.status(400).json({ message: 'failure' });
    UserModel.findAll({
      attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
      where: {
        [Op.or]: [
          { userId: { [Op.like]: `%${name}%` } },
          { userNickName: { [Op.like]: `%${name}%` } }
        ]
      },
      include: [{ model: ArticleModel }, { model: FollowModel }],
      raw: true
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure' });
      });
  }
};
