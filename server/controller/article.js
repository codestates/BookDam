const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');

module.exports = {
  get: (req, res) => {
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    UserModel.findAll({
      attributes: { exclude: ['updatedAt', 'createdAt', 'password'] },
      include: [{ model: ArticleModel, attributes: { exclude: ['id', 'updatedAt'] } },
        { model: FollowModel, where: { user_Id: id }, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] } }],
      raw: true
      // nest: true
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure' });
      });
  },
  post: (req, res) => {
    // 데이터가 들어오면 책 썸네일은 path로 받는다.
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
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
        res.status(200).json({ message: 'success', articleInfo: result });
      })
      .catch((error) => {
        res.status(400).json({ message: 'failure' });
      });
  },
  patch: async (req, res) => {
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const article_Id = req.query.article_Id;
    if (!article_Id) return res.status(400).json({ message: 'failure' });
    const articleInfo = req.body.articleInfo;
    ArticleModel.update({
      sentence: articleInfo.sentence,
      comment: articleInfo.comment
    },
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
          .catch(() => {
            res.status(401).json({ message: 'failure' });
          });
      })
      .catch(() => {
        res.status(401).json({ message: 'failure' });
      });
  },
  delete: (req, res) => {
    const id = parseInt(req.params.user_Id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    const article_Id = req.query.article_Id;
    if (!article_Id) return res.status(400).json({ message: 'failure' });
    ArticleModel.destroy({
      where: {
        id: article_Id,
        user_Id: id
      }
    })
      .then(() => {
        res.status(200).json({ message: 'success' });
      })
      .catch(() => {
        res.status(401).json({ message: 'failure' });
      });
  }
};
