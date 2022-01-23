'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      {
        id: '1',
        user_Id: '1', // 게스트
        follow_Id: '2', // 북담
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
