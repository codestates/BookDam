const { Follow: FollowModel } = require('../models');

module.exports = {
  post: (req, res) => {
    const id = parseInt(req.params.user_Id, 10);
    const follow_Id = req.query.follow_Id;
    if (!follow_Id) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(follow_Id)) return res.status(400).json({ message: 'failure' });
    if (Number.isNaN(id) === Number.isNaN(follow_Id)) return res.status(400).json({ message: '본인을 팔로우 할 수 없습니다.' });
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
        res.status(401).json({ message: 'failure' });
      });
  },
  delete: async (req, res) => {
    const id = parseInt(req.params.user_Id, 10);
    const follow_Id = req.query.follow_Id;
    if (Number.isNaN(id)) return res.status(400).json({ message: 'failure' });
    if (!follow_Id) return res.status(400).json({ message: 'failure' });
    FollowModel.destroy({
      where: {
        user_Id: id,
        follow_Id: follow_Id
      }
    })
      .then((result) => {
        if (result === 1) res.status(200).json({ message: 'success' });
        else res.status(401).json({ message: 'failure' });
      })
      .catch((error) => {
        res.status(401).json({ message: 'failure' });
      });
  }
};
