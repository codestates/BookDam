const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');

// 비인증은 401
// 나쁜 요청은 400
// 로그인한 사람이 권한 없는 짓을 할 떄 403

module.exports = {
  get: (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    const page = parseInt(req.query.page, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(page)) return res.status(400).json({ message: 'failure' });
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
    ArticleModel.findAll({
      attributes: { exclude: ['updatedAt'] },
      order: [['id', 'DESC']],
      raw: true,
      limit: 5,
      offset: page * 5,
      include: [{
        model: UserModel,
        attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
        required: true,
        include: { model: FollowModel, where: { user_Id: id }, attributes: { exclude: ['id', 'follow_Id', 'createdAt', 'updatedAt'] } }
      }]
    })
      .then((result) => {
        res.location('https://bookdam.link/feedPage');
        res.status(200).json({ articleData: result });
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure', error: error });
      });
  },
  post: (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
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
    const articleInfo = req.body.articleInfo;
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const koreaNow = new Date(utcNow + koreaTimeDiff);
    const today = `${koreaNow.getFullYear()}-${koreaNow.getMonth() + 1}-${koreaNow.getDate()}`;
    ArticleModel.create({
      user_Id: id,
      book_Title: articleInfo.book_Title,
      book_Author: articleInfo.book_Author,
      book_Thumbnail: articleInfo.book_Thumbnail,
      book_Publisher: articleInfo.book_Publisher,
      sentence: articleInfo.sentence,
      comment: articleInfo.comment,
      createdAt: today
    })
      .then((result) => {
        delete result.dataValues.updatedAt;
        res.location('https://bookdam.link/myPage');
        res.status(200).json({ message: 'success', articleInfo: result });
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure', error: error });
      });
  },
  patch: async (req, res) => { // test done
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
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

    const article_Id = parseInt(req.query.article_Id, 10);
    if (Number.isNaN(article_Id)) return res.status(400).json({ message: 'failure' });

    const articleInfo = req.body.articleInfo;
    ArticleModel.update(articleInfo,
      {
        where: {
          id: article_Id
        }
      })
      .then(() => {
        ArticleModel.findOne({
          attributes: { exclude: ['updatedAt'] },
          where: {
            id: article_Id
          }
        })
          .then((result) => {
            res.status(200).json({ message: 'success', userInfo: result });
          })
          .catch((error) => {
            res.status(400).json({ message: 'failure', error: error });
          });
      })
      .catch(() => {
        res.status(401).json({ message: 'failure', error: error });
      });
  },
  delete: (req, res) => {
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
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
    const article_Id = parseInt(req.query.article_Id, 10);
    if (Number.isNaN(article_Id)) return res.status(400).json({ message: 'failure' });
    ArticleModel.destroy({
      where: {
        id: article_Id,
        user_Id: id
      }
    })
      .then((result) => {
        if (result === 1) {
          res.location('https://bookdam.link/myPage');
          res.status(200).json({ message: 'success' });
        } else res.status(401).json({ message: '해당 게시물이 존재하지 않습니다.' });
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure', error: error });
      });
  }
};
