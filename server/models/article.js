'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Article.belongsTo(models.User, { foreignKey: 'id', targetKey: 'user_Id' });
      // define association here
    }
  }
  Article.init({
    user_Id: DataTypes.INTEGER,
    book_Title: DataTypes.STRING,
    book_Author: DataTypes.STRING,
    book_Thumbnail: DataTypes.STRING,
    book_Publisher: DataTypes.STRING,
    sentense: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post'
  });
  return Article;
};
