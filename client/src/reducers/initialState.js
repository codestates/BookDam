export const initialState =
{
  isGuest: true,

  isLogin: false,

  userInfo:
    {
      id: 1,
      userId: 'holystoryseo',
      userNickName: '게스트',
      userImage: ''
    },

  articleInfo: [
    {
      id: 1, // article PK id
      book_Title: '총균쇠',
      book_Author: '재레드 다이아몬드',
      book_Publisher: '열린 마음',
      sentense: '아몬드는 원래 독성이 있는 씨앗이었다.',
      comment: '중독되서 계속 먹고 싶었던 거구만.',
      createdAt: '2021-12-29'
    }
  ]
};
