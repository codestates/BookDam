'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        id: '1',
        user_Id: '1',
        book_Title: '총균쇠',
        book_Author: '미상',
        book_Thumbnail: 'https://bookthumb-phinf.pstatic.net/cover/020/843/02084345.jpg?type=m1&udate=20210724',
        book_Publisher: '미상',
        sentence: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        user_Id: '2',
        book_Title: '백설공주',
        book_Author: '미상',
        book_Thumbnail: 'https://bookthumb-phinf.pstatic.net/cover/178/409/17840940.jpg?type=m1&udate=20210722',
        book_Publisher: '미상',
        sentence: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        user_Id: '3',
        book_Title: '신데렐라',
        book_Author: '미상',
        book_Thumbnail: 'https://bookthumb-phinf.pstatic.net/cover/205/792/20579282.jpg?type=m1&udate=20210917',
        book_Publisher: '미상',
        sentence: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        user_Id: '1',
        book_Title: '달러구트',
        book_Author: '미상',
        book_Thumbnail: 'https://bookthumb-phinf.pstatic.net/cover/213/446/21344649.jpg?type=m1&udate=20211201',
        book_Publisher: '미상',
        sentence: 'blahblahblahblah',
        comment: 'blahblahblahblah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        user_Id: '2',
        book_Title: '파친코',
        book_Author: '미상',
        book_Thumbnail: 'https://bookthumb-phinf.pstatic.net/cover/134/282/13428213.jpg?type=m1&udate=20210914',
        book_Publisher: '미상',
        sentence: 'blahblahblahblah',
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
