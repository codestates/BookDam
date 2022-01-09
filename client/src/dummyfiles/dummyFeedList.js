import defaultUserImage from '../assets/images/defaultUserImage.png';

const data = [
  {
    id: 2, // 피드 작성자 아이디
    userId: 'test2',
    userNickName: 'test2',
    userImage: 'blahblahblahblah',
    'Articles.user_Id': 2,
    'Articles.book_Title': '파친코',
    'Articles.book_Author': '미상',
    'Articles.book_Thumbnail': '',
    'Articles.book_Publisher': '미상',
    'Articles.sentense': 'blahblahblahblah',
    'Articles.comment': 'blahblahblahblah',
    'Articles.createdAt': '2022-01-03',
    'Follows.user_Id': 1, // 피드 작성자가 팔로우 한 아이디
    'Follows.follow_Id': 2 // 피드 작성자 아이디 = id
  },
  {
    id: 6,
    userId: 'Donald Trump', // user 테이블에서 갖고 온다
    userNickName: 'White people!', // user 테이블에서 갖고 온다
    user_id: 7,
    userImage: defaultUserImage,
    book_Title: '백설공주',
    book_Author: '미상',
    book_Publisher: '공짜 마음',
    sentence: '백설공주가 독사과를 먹었어요.',
    comment: '남이 주는 건 함부로 먹으면 안되겠어요.',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 13,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 14,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 15,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 16,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 17,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 18,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: false
  },
  {
    id: 19,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  },
  {
    id: 23,
    userId: 'bookerT', // user 테이블에서 갖고 온다
    userNickName: 'bookerT', // user 테이블에서 갖고 온다
    user_id: 6,
    userImage: defaultUserImage,
    book_Title: '비트코인 블라블라',
    book_Author: '크립토 노마드',
    book_Publisher: '지식오름',
    sentence: '적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다',
    comment: '비트코인이라..',
    createdAt: '2021-12-27',
    isFollow: true
  }
];

export default data;
