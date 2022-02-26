'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_Id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      book_Title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      book_Author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      book_Thumbnail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      book_Publisher: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sentence: {
        allowNull: false,
        type: Sequelize.STRING(600)
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING(600)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Articles');
  }
};
