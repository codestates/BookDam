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
        res.status(401).json({ message: 'failure' });
      });
  },
  post: (req, res) => {
  },
  patch: (req, res) => {
  },
  delete: (req, res) => {
  }
};

// const now = new Date();
// const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
// const koreaTimeDiff = 9 * 60 * 60 * 1000;
// const koreaNow = new Date(utcNow + koreaTimeDiff);
// const today = `${koreaNow.getFullYear()}-${koreaNow.getMonth() + 1}-${koreaNow.getDate()}`;
