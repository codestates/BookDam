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
    user_Id: {type: DataTypes.INTEGER, allowNull: false},
    book_Title: {type: DataTypes.STRING, allowNull: false},
    book_Author: {type: DataTypes.STRING, allowNull: false},
    book_Thumbnail: {type: DataTypes.STRING, allowNull: false},
    book_Publisher: {type: DataTypes.STRING, allowNull: false},
    sentence: {type: DataTypes.STRING, allowNull: false},
    comment: {type: DataTypes.STRING, allowNull: false},
    createdAt: {type: DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'Article'
  });
  return Article;
};
