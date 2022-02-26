const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');
const { isAuthorized } = require('./tokenFunctions/index');

module.exports = {
  login: async (req, res) => {
    try {
      const userId = req.body.userInfo.userId;
      const password = req.body.userInfo.password;
      if (!userId || !password) return res.status(400).json({ message: '유저의 정보를 정확하게 입력해주세요.' });
      const userData = await UserModel.findOne({
        where: {
          userId: userId
        },
        attributes: { exclude: ['updatedAt', 'createdAt'] }
      });
      if (!userData) return res.status(404).json({ message: '회원가입한 유저가 아닙니다.' });
      const userPassword = userData.password;
      const user = {
        id: userData.id,
        userId: userData.userId
      };
      const same = bcrypt.compareSync(password, userPassword);
      if (!same) {
        return res.status(400).json({ message: '비밀번호가 틀렸습니다.' });
      }
      delete userData.dataValues.password;
      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      res.cookie('jwt', accessToken, {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        domain: '.bookdam.link',
        httpOnly: true,
        secure: true
      }).status(200).json({ message: 'success', userInfo: userData });
    } catch {
      res.status(500).json({ message: '로그인에 실패했습니다.' });
    }
  },
  logout: async (req, res) => {
    try {
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      const findUser = await UserModel.findOne({
        where: { id: decodedData.id, userId: decodedData.userId }
      });
      if (!findUser) return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
      // 쿠키 상으로 로그인은 되어있지만, db에서 유저의 정보가 없을 때의 처리
      // null일 경우 catch가 아닌 다음 코드로 진행되는 에러가 발생함

      res.clearCookie('jwt').status(200).json({ message: '로그아웃 되었습니다.' });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.clearCookie('jwt').status(200).json({ message: '로그아웃 되었습니다.' });
      }
      res.status(500).json({ message: '로그아웃에 실패했습니다.' });
    }
  },
  signup: async (req, res) => {
    try {
      const userInfo = req.body.userInfo;
      const userId = userInfo.userId;
      const userNickName = userInfo.userNickName;
      const password = userInfo.password;
      if (!userId || !password || !userNickName) return res.status(400).json({ message: '회원가입 정보를 정확하게 입력해주세요.' });
      const encryptedPassowrd = bcrypt.hashSync(password, 10);
      const duplication = await UserModel.findOrCreate({
        where: {
          userId: userId
        },
        defaults: {
          userId: userId,
          userNickName: userNickName,
          password: encryptedPassowrd,
          userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png'
        }
      });
      if (!duplication[1]) return res.status(400).json({ message: '중복된 아이디입니다.' });
      const userDate = duplication[0];
      delete userDate.dataValues.password;
      delete userDate.dataValues.createdAt;
      delete userDate.dataValues.updatedAt;
      const followBookdam = await FollowModel.create({ // 북담계정 만들어서 회원가입 시 북담계정 follow 하는 기능
        user_Id: userDate.dataValues.id,
        follow_Id: 2
      });
      res.status(201).json({ message: 'success', userInfo: userDate });
    } catch {
      res.status(500).json({ message: '회원가입에 실패했습니다.' });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 탈퇴를 요청할 수 있습니다.' });
      const findUser = await UserModel.findOne({
        where: { id: decodedData.id, userId: decodedData.userId }
      });
      if (!findUser) return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
      const deleteArticle = await ArticleModel.destroy({ where: { user_id: id } });
      const deleteFollow = await FollowModel.destroy({ where: { [Op.or]: [{ user_Id: id }, { follow_Id: id }] } });
      const deleteUser = await UserModel.destroy({ where: { id: id } });
      res.clearCookie('jwt').status(200).json({ message: '유저가 탈퇴되었습니다.' });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '회원탈퇴에 실패했습니다.' });
    }
  },
  get: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const page = parseInt(req.query.page, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(page)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      const findUser = await UserModel.findOne({
        attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
        where: { id: id }
      });
      if (!findUser) return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
      const isfollow = await FollowModel.findAndCountAll({ where: { user_Id: decodedData.id, follow_Id: id } });
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
      if (id === decodedData.id) {
        return res.status(200).json({ message: 'success', userInfo: findUser, follow, articleData: findArtilces });
      } else {
        return res.status(200).json({ message: 'success', userInfo: findUser, follow, articleData: findArtilces, isfollow: isfollow.count });
      }
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '회원 조회에 실패했습니다.' });
    }
  },
  patch: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 회원정보를 수정할 수 있습니다.' });

      const userInfo = req.body.userInfo;
      if (!userInfo) return res.status(400).json({ message: '수정할 정보를 정확하게 입력해주세요.' });
      if (userInfo.password) userInfo.password = bcrypt.hashSync(userInfo.password, 10);
      const modifyUser = await UserModel.update(
        userInfo, { where: { id: id } });
      if (modifyUser[0] === 0) return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
      const findUser = await UserModel.findOne({
        attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
        where: { id: id }
      });
      res.status(201).json({ message: 'success', userInfo: findUser });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '회원정보 수정에 실패했습니다.' });
    }
  },
  search: async (req, res) => {
    try {
      const name = req.query.name;
      if (!name) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      const searchInfo = await UserModel.findAll({
        attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
        where: {
          [Op.or]: [
            { userId: { [Op.like]: `%${name}%` } },
            { userNickName: { [Op.like]: `%${name}%` } }
          ]
        }
      });
      res.status(200).json({ message: 'success', searchInfo: searchInfo });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '유저 검색에 실패했습니다.' });
    }
  },
  validation: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const password = req.body.userInfo.password;
      if (!password) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      const findUser = await UserModel.findOne({
        where: { id: decodedData.id, userId: decodedData.userId }
      });
      if (!findUser) return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
      const userPassword = findUser.password;
      const same = bcrypt.compareSync(password, userPassword);
      if (!same) {
        return res.status(401).json({ message: '비밀번호가 틀렸습니다.' });
      }
      res.status(200).json({ message: '비밀번호가 맞습니다.' });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '비밀번호 검증에 실패했습니다.' });
    }
  }
};
