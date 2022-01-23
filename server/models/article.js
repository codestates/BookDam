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
      Article.belongsTo(models.User, { foreignKey: 'user_Id', targetKey: 'id' });
      // define association here
    }
  }
  Article.init({
    user_Id: DataTypes.INTEGER,
    book_Title: DataTypes.STRING,
    book_Author: DataTypes.STRING,
    book_Thumbnail: DataTypes.STRING,
    book_Publisher: DataTypes.STRING,
    sentence: DataTypes.STRING,
    comment: DataTypes.STRING,
    createdAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article'
  });
  return Article;
};
