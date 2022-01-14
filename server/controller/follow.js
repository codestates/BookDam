const { Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
  post: (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    const follow_Id = parseInt(req.query.follow_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(follow_Id)) return res.status(400).json({ message: 'failure' });
    if (id === follow_Id) return res.status(400).json({ message: '본인을 팔로우할 수 없습니다.' });

    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    let decodedData;
    jwt.verify(cookie, process.env.ACCESS_SECRET, function (error, decoded) {
      if (error) return res.status(401).json({ message: '토큰 만료로 로그인이 필요합니다.' });
      else {
        decodedData = decoded;
      }
    });
    if (id !== decodedData.id) return res.status(401).json({ message: 'failure' });

    FollowModel.findOrCreate({
      where: {
        user_Id: id,
        follow_Id: follow_Id
      },
      defaults: {
        user_Id: id,
        follow_Id: follow_Id
      }
    })
      .then((result) => {
        if (result[1]) {
          res.status(200).json({ message: 'success' });
        } else {
          return res.status(400).json({ message: '이미 팔로우되어 있는 유저입니다.' });
        }
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure', error: error });
      });
  },
  delete: (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    const follow_Id = parseInt(req.query.follow_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(follow_Id)) return res.status(400).json({ message: 'failure' });
    if (id === follow_Id) return res.status(400).json({ message: '본인 팔로우를 취소할 수 없습니다.' });
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
    let decodedData;
    jwt.verify(cookie, process.env.ACCESS_SECRET, function (error, decoded) {
      if (error) return res.status(401).json({ message: '토큰 만료로 로그인이 필요합니다.' });
      else {
        decodedData = decoded;
      }
    });
    if (id !== decodedData.id) return res.status(401).json({ message: 'failure' });

    FollowModel.destroy({
      where: {
        user_Id: id,
        follow_Id: follow_Id
      }
    })
      .then((result) => {
        if (result === 1) res.status(200).json({ message: 'success' });
        else res.status(401).json({ message: '팔로우되어 있는 유저가 아닙니다.' });
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure', error: error });
      });
  }
};
