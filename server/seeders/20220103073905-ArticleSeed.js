'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        id: '1',
        user_Id: '1',
        book_Title: '총균쇠',
        book_Author: '미상',
        book_Thumbnail: 'blahblahblahblah',
        book_Publisher: '미상',
        sentense: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        user_Id: '2',
        book_Title: '백설공주',
        book_Author: '미상',
        book_Thumbnail: 'blahblahblahblah',
        book_Publisher: '미상',
        sentense: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        user_Id: '3',
        book_Title: '신데렐라',
        book_Author: '미상',
        book_Thumbnail: 'blahblahblahblah',
        book_Publisher: '미상',
        sentense: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        user_Id: '1',
        book_Title: '달러구트',
        book_Author: '미상',
        book_Thumbnail: 'blahblahblahblah',
        book_Publisher: '미상',
        sentense: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        user_Id: '2',
        book_Title: '파친코',
        book_Author: '미상',
        book_Thumbnail: 'blahblahblahblah',
        book_Publisher: '미상',
        sentense: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};