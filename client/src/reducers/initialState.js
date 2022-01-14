export const initialState =
{
  isLogin: false,

  userInfo:
    {
      id: '',
      userId: '',
      userNickName: '',
      userImage: ''
    },

  articleInfo:
    {
      id: 1, // article PK id
      book_Title: '총균쇠',
      book_Author: '미상',
      book_Publisher: '미상',
      book_Thumbnail: '',
      sentence: '아몬드는 원래 독성이 있는 씨앗이었다.',
      comment: '중독되서 계속 먹고 싶었던 거구만.',
      createdAt: '2022-01-13'
    },

  bookSearchInfo: [

  ],

  followInfo: {
    id: 0,
    userId: '',
    userNickName: '',
    userImage: ''
  }
};
