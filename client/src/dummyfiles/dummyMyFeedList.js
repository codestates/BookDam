import defaultUserImage from "../assets/images/defaultUserImage.png"

const data = [{
  postData : [
    {
      id : 1, // 이거는 post 테이블의 pk id 입니다!
      userId : "honggildong", // user 테이블에서 갖고 온다
      userNickName : "GGilDDong", // user 테이블에서 갖고 온다
      user_id : 1, // 여기는 해당 유저의 user 테이블 pk id 입니다.
      userImage : defaultUserImage,
      book_Title : "총균쇠",
      book_Author : "재레드 다이아몬드",
      book_Publisher : "열린 마음",
      sentense : "아몬드는 원래 독성이 있는 씨앗이었다.",
      comment : "중독되서 계속 먹고 싶었던 거구만.",
      createdAt : "2021-12-29"
    },
    {
      id : 2,
      userId : "honggildong", // user 테이블에서 갖고 온다
      userNickName : "GGilDDong", // user 테이블에서 갖고 온다
      user_id : 1,
      userImage : defaultUserImage,
      book_Title : "달러구트 꿈백화점",
      book_Author : "이미예",
      book_Publisher : "닫힌 마음",
      sentense : "꿈 사러 오세요.",
      comment : "오늘은 치킨 먹는 꿈을 사야겠어.",
      createdAt : "2021-12-29"
    },
    {
      id : 3,
      userId : "honggildong", // user 테이블에서 갖고 온다
      userNickName : "GGilDDong", // user 테이블에서 갖고 온다
      user_id : 1,
      userImage : defaultUserImage,
      book_Title : "그리스인 조르바",
      book_Author : "니코스 카잔차키스",
      book_Publisher : "열린 책들",
      sentense : "“새끼손가락 하나가 왜 없느냐고요? 질그릇을 만들자면 물레를 돌려야 하잖아요? 그런데 왼손 새끼손가락이 자꾸 거치작거리는 게 아니겠어요? 그래서 도끼로 내려쳐 잘라 버렸어요.”",
      comment : "카잔차키스는 20세기 가장 위대한 작가 중 하나이다.",
      createdAt : "2021-12-29"
    }
  ]
}]