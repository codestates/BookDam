const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');
const { isAuthorized } = require('./tokenFunctions/index');

module.exports = {
  get: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const page = parseInt(req.query.page, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(page)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인의 피드 페이지만 접속할 수 있습니다.' });
      const articleData = await ArticleModel.findAll({
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
      });
      res.status(200).json({ articleData: articleData });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '아티클 조회에 실패했습니다.' });    }
  },
  post: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 아티클을 작성할 수 있습니다.' });
      const articleInfo = req.body.articleInfo;
      if (!articleInfo) return res.status(400).json({ message: '아티클 정보를 정확하게 입력해주세요.' });
      const now = new Date();
      const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
      const koreaTimeDiff = 9 * 60 * 60 * 1000;
      const koreaNow = new Date(utcNow + koreaTimeDiff);
      const today = `${koreaNow.getFullYear()}-${koreaNow.getMonth() + 1}-${koreaNow.getDate()}`;
      const createArticle = await ArticleModel.create({
        user_Id: id,
        book_Title: articleInfo.book_Title,
        book_Author: articleInfo.book_Author,
        book_Thumbnail: articleInfo.book_Thumbnail,
        book_Publisher: articleInfo.book_Publisher,
        sentence: articleInfo.sentence,
        comment: articleInfo.comment,
        createdAt: today
      });
      delete createArticle.dataValues.updatedAt;
      res.status(200).json({ message: 'success', articleInfo: createArticle });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      else if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: '아티클 정보를 정확하게 입력해주세요.' });
      }
      res.status(500).json({ message: '아티클 생성에 실패했습니다.' });
    }
  },
  patch: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const article_Id = parseInt(req.query.article_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(article_Id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 아티클을 수정할 수 있습니다.' });
      const articleInfo = req.body.articleInfo;
      if (!articleInfo) return res.status(400).json({ message: '아티클 정보를 정확하게 입력해주세요.' });
      const modifyArticle = await ArticleModel.update(articleInfo,
        {
          where: {
            user_Id: id,
            id: article_Id
          }
        });
      if (modifyArticle[0] === 0) return res.status(404).json({ message: '해당 아티클을 찾을 수 없습니다.' });
      const findArticle = await ArticleModel.findOne({
        attributes: { exclude: ['updatedAt'] },
        where: {
          id: article_Id
        }
      });
      res.status(200).json({ message: 'success', userInfo: findArticle });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '아티클 수정에 실패했습니다.' });
    }
  },
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.user_Id, 10);
      const article_Id = parseInt(req.query.article_Id, 10);
      if (Number.isNaN(id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      if (Number.isNaN(article_Id)) return res.status(400).json({ message: '요청이 잘 못 되었습니다.' });
      const cookie = req.cookies.jwt;
      if (!cookie) return res.status(401).json({ message: '로그인 유저가 아닙니다.' });
      const decodedData = isAuthorized(cookie);
      if (id !== decodedData.id) return res.status(403).json({ message: '본인만 아티클을 삭제할 수 있습니다.' });
      const deleteArticle = await ArticleModel.destroy({
        where: {
          id: article_Id,
          user_Id: id
        }
      });
      if (deleteArticle === 1) {
        res.status(200).json({ message: 'success' });
      } else res.status(404).json({ message: '해당 아티클을 찾을 수 없습니다.' });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: '로그인 유효기간이 만료되었습니다.' });
      }
      res.status(500).json({ message: '아티클 삭제에 실패했습니다.' });
    }
  }
};
