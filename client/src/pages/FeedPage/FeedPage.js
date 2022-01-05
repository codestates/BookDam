import React from 'react';
import { Feed } from '../../components/Feed/Feed';

export function FeedPage () {
  // 피드 페이지 로직
  // 1. Axios로 서버에 요청을 보내서 내 follow 목록 받아오기
  // 2. 받아온 follow 목록을 고차함수 map를 이용해 값 넣어서 리턴하기
  // 3. feedListContainer에서 map으로 나온 값들 넣어주기
  // 4. 이것들이 처리되면서 무한스크롤 구현하기

  // 팔로우 추가삭제시에는 재랜더링x
  // 유저검색시 useEffect로 onChange시 Axios 요청 처리
  // 더미데이터로 불러오는지 확인

  // 무한스크롤 기능 구현 방식 정해지는대로 공유하기

  return (
    <>
      <Feed />
    </>
  );
}
