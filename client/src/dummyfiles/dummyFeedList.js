import defaultUserImage from "../assets/images/defaultUserImage.png"


export const data = [{  
  postData : [
    {
      id : 5,
      userId : "DoolRi", // user 테이블에서 갖고 온다
      userNickName : "Hoit", // user 테이블에서 갖고 온다
      user_id : 3,
      userImage : defaultUserImage,
      book_Title : "신데렐라",
      book_Author : "미상",
      book_Publisher : "열린 마음",
      sentense : "신데렐라는 어려서...",
      comment : "나도 유리구두 갖고 싶어요",
      createdAt : "2021-12-29"
    },
    {
      id : 6,
      userId : "Donald Trump", // user 테이블에서 갖고 온다
      userNickName : "White people!", // user 테이블에서 갖고 온다
      user_id: 3,
      userImage : defaultUserImage,
      book_Title : "백설공주",
      book_Author : "미상",
      book_Publisher : "공짜 마음",
      sentense : "백설공주가 독사과를 먹었어요.",
      comment : "남이 주는 건 함부로 먹으면 안되겠어요.",
      createdAt : "2021-12-27"
    },
    {
      id : 13,
      userId : "bookerT", // user 테이블에서 갖고 온다
      userNickName : "bookerT", // user 테이블에서 갖고 온다
      user_id: 6,
      userImage : defaultUserImage,
      book_Title : "비트코인 블라블라",
      book_Author : "크립토 노마드",
      book_Publisher : "지식오름",
      sentense : "적어도 비트코인에 투자를 할 때, 비트코인이 뭐하는 코인이고 왜 세상은 비트코인을 가지고 이렇게 말들이 많고 대체 왜 계속 오를 것이라는 전망과 주장이 나오는지는 알고서 투자를 해야 한다",
      comment : "비트코인이라..",
      createdAt : "2021-12-27"
    }
  ]
}]
