'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      User.hasMany(models.follow, {foreignKey: 'id', sourceKey: 'user_Id'});
      User.hasMany(models.Article, {foreignKey: 'id', sourceKey: 'user_Id'});
    }
  }
  User.init({
    userId: DataTypes.STRING,
    userNickName: DataTypes.STRING,
    password: DataTypes.STRING,
    userImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};
