'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Follow.belongsTo(models.User, {foreignKey: 'id', targetKey: 'user_Id'});
      // define association here
    }
  }
  Follow.init({
    user_Id: DataTypes.INTEGER,
    follow_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Follow'
  });
  return Follow;
};
