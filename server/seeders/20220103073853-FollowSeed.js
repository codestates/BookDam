'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      {
        id: '1',
        user_Id: '1',
        follow_Id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        user_Id: '1',
        follow_Id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        user_Id: '2',
        follow_Id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        user_Id: '3',
        follow_Id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        user_Id: '3',
        follow_Id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
