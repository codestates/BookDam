'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '1',
        userId: 'test1',
        userNickName: 'test1',
        password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
        userImage: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        userId: 'test2',
        userNickName: 'test2',
        password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
        userImage: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        userId: 'test3',
        userNickName: 'test3',
        password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
        userImage: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
