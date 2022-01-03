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
      sentense: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint("Articles", {
      fields: ["user_Id"],
      type: "foreign key",
      name: "fk_Post_User",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
     })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Articles", "fk_Post_User");
    await queryInterface.dropTable('Articles');
  }
};
