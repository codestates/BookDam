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
      // Follow.belongsTo(models.User, { foreignKey: 'user_Id', targetKey: 'id' });
      Follow.belongsTo(models.User, { foreignKey: 'follow_Id', targetKey: 'id' });
      // define association here
    }
  }
  Follow.init({
    user_Id: {type: DataTypes.INTEGER, allowNull: false},
    follow_Id: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Follow'
  });
  return Follow;
};
