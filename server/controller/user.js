const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');

module.exports = {
  login: async (req, res) => { // test done
    const userId = req.body.userInfo.userId;
    const password = req.body.userInfo.password;
    if (!userId || !password) return res.status(400).json({ message: 'failure' });
    const userData = await UserModel.findOne({
      where: {
        userId: userId
      },
      attributes: { exclude: ['updatedAt', 'createdAt'] }
    });
    if (!userData) return res.status(400).json({ message: 'failure' });
    const userPassword = userData.password;
    const user = {
      id: userData.id,
      userId: userData.userId
    };
    const same = bcrypt.compareSync(password, userPassword);
    if (!same) {
      return res.status(400).json({ message: 'failure' });
    }
    delete userData.dataValues.password;
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '3h' });
    res.cookie('jwt', accessToken, {
      maxAge: 3 * 60 * 60 * 1000,
      sameSite: 'none',
      httpOnly: true,
      secure: true
    }).status(200).json({ message: 'success', userInfo: userData });
  },
  logout: async (req, res) => { // test done
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    const findUser = await UserModel.findOne({
      where: {
        id: userInfo.id,
        userId: userInfo.userId
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    else {
      res.clearCookie('jwt').status(200).json({ message: '로그아웃 되었습니다.' });
    }
  },
  signup: async (req, res) => { // test done
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
        userImage: '기본 이미지 경로'
      }
    });
    if (!duplication[1]) {
      return res.status(400).json({ message: '중복된 아이디입니다.' });
    } else {
      const userDate = duplication[0];
      delete userDate.dataValues.password;
      delete userDate.dataValues.createdAt;
      delete userDate.dataValues.updatedAt;
      // FollowModel.create({ // 북담계정 만들어서 회원가입 시 북담계정 follow 하는 기능
      //   user_Id: userDate.dataValues.id,
      //   follow_Id: 북담 계정 id
      // })
      // .then(() => {
      //   res.status(200).json({ message: 'success', userInfo: userDate });
      // })
      // .catch((error) => {
      //   res.status(401).json({ message: 'failure' });
      // })
      res.status(200).json({ message: 'success', userInfo: userDate });
    }
  },
  delete: async (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userInfo = jwt.verify(cookie, process.env.ACCESS_SECRET);
    if (id !== userInfo.id) return res.status(400).json({ message: 'failure' });
    const findUser = await UserModel.findOne({
      where: {
        id: id
      }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    const deleteArticle = await ArticleModel.destroy({ where: { user_id: id } });
    const deleteFollow = await FollowModel.destroy({ where: { [Op.or]: [{ user_Id: id }, { follow_Id: id }] } });
    const deleteUser = await UserModel.destroy({ where: { id: id } });
    // 삭제할 데이터가 없다면 0이 뜨는 데, 0이 아닌 다른 값, 즉 에러가 떴을 경우 처리.
    if (Number.isNaN(deleteArticle)) return res.status(401).json({ message: deleteArticle });
    if (Number.isNaN(deleteFollow)) return res.status(401).json({ message: deleteFollow });
    if (Number.isNaN(deleteUser)) return res.status(401).json({ message: deleteUser });
    res.clearCookie('jwt').status(200).json({ message: '유저가 탈퇴되었습니다.' });
  },
  get: async (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    const page = parseInt(req.query.page, 10)
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(page)) return res.status(400).json({ message: 'failure' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const findUser = await UserModel.findOne({
      where: { id: id },
      attributes: { exclude: ['updatedAt', 'createdAt', 'password'] }
    });
    if (!findUser) return res.status(401).json({ message: 'failure' });
    const findFollowing = await FollowModel.findAndCountAll({ where: { user_Id: id } });
    const findFollower = await FollowModel.findAndCountAll({ where: { follow_Id: id } });
    const follow = { following: findFollowing.count, follower: findFollower.count };

    const findArtilces = await ArticleModel.findAndCountAll({
      attributes: { exclude: ['updatedAt'] },
      order: [['id', 'DESC']],
      raw: true,
      limit: 8,
      offset: page * 8,
      include: [{
        model: UserModel,
        attributes: { exclude: ['id', 'updatedAt', 'createdAt', 'password'] },
        where: { id: id }
      }]
    });

    // const findArtilces = await UserModel.findAll({
    //   where: { id: id },
    //   attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
    //   include: [{ model: ArticleModel, attributes: { exclude: ['id', 'updatedAt'] }, order: ['createdAt', 'ASC'] }],
    //   raw: true
    // });
    // if (findArtilces[0]['Articles.user_Id'] === null) { // article이 없을 경우의 처리.
    //   return res.status(200).json({ message: 'success', userInfo: findUser, follow, articleData: null });
    // }
    res.status(200).json({ message: 'success', userInfo: findUser, follow, articleData: findArtilces });
  },
  patch: (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const userData = jwt.verify(cookie, process.env.ACCESS_SECRET);
    if (id !== userData.id) return res.status(400).json({ message: 'failure' });
    const userInfo = req.body.userInfo;
    const userNickName = userInfo.userNickName;
    const password = userInfo.password;
    const userImage = userInfo.userImage;
    const encryptedPassowrd = bcrypt.hashSync(password, 10);
    if (!password || !userNickName) return res.status(400).json({ message: 'failure' });
    UserModel.update({
      userNickName: userNickName,
      password: encryptedPassowrd,
      userImage: userImage
    }, { where: { id: id } })
      .then(() => {
        UserModel.findOne({
          attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
          where: { id: id }
        })
          .then((result) => {
            res.status(200).json({ message: 'success', userInfo: result });
          })
          .catch((error) => {
            res.status(401).json({ message: 'failure', error: error });
          });
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure', error: error });
      });
  },
  search: async (req, res) => { // test done
    const name = req.query.name;
    if (!name) return res.status(400).json({ message: 'failure' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    const searchInfo = await UserModel.findAll({
      attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
      where: {
        [Op.or]: [
          { userId: { [Op.like]: `%${name}%` } },
          { userNickName: { [Op.like]: `%${name}%` } }
        ]
      }
    });
    if (!searchInfo) return res.status(400).json({ message: 'failure' });
    res.status(200).json({ message: 'success', searchInfo: searchInfo });
  }
};
