const { User: UserModel, Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');
const { isAuthorized } = require('./tokenFunctions/index');

module.exports = {
  post: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const follow_Id = parseInt(req.query.follow_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(follow_Id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (id === follow_Id) return res.status(400).json({ message: '본인을 팔로우할 수 없습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 팔로우를 요청할 수 있습니다.' });
      const findUser = await UserModel.findOne({
        where : { id : follow_Id }
      })
      if (!findUser) return res.status(400).json({ message: '존재하지 않는 유저입니다.' });
      const followUser = await FollowModel.findOrCreate({
        where: {
          user_Id: id,
          follow_Id: follow_Id
        },
        defaults: {
          user_Id: id,
          follow_Id: follow_Id
        }
      });
      if (followUser[1]) {
        res.status(200).json({ message: 'success' });
      } else {
        res.status(400).json({ message: '이미 팔로우되어 있는 유저입니다.' });
      }
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '유저 팔로우에 실패했습니다.' });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const follow_Id = parseInt(req.query.follow_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(follow_Id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (id === follow_Id) return res.status(400).json({ message: '본인 팔로우를 취소할 수 없습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 팔로우를 취소할 수 있습니다.' });
      const unfollowUser = await FollowModel.destroy({
        where: {
          user_Id: id,
          follow_Id: follow_Id
        }
      });
      if (unfollowUser === 1) {
        return res.status(200).json({ message: 'success' });
      } else {
        return res.status(404).json({ message: '팔로우되어 있는 유저가 아닙니다.' });
      }
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      return res.status(500).json({ message: '유저 언팔로우에 실패했습니다.' });
    }
  }
};
