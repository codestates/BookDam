'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '1',
        userId: 'guest',
        userNickName: '게스트',
        password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.', // 1234
        userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        userId: 'BookDam',
        userNickName: 'BookDam',
        password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.', // 1234
        userImage: 'https://img.icons8.com/flat-round/512/000000/dog--v1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
