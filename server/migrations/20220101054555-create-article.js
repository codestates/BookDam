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
        type: Sequelize.INTEGER
      },
      book_Title: {
        type: Sequelize.STRING
      },
      book_Author: {
        type: Sequelize.STRING
      },
      book_Thumbnail: {
        type: Sequelize.STRING
      },
      book_Publisher: {
        type: Sequelize.STRING
      },
      sentence: {
        type: Sequelize.STRING(600)
      },
      comment: {
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
