import React, { useState } from 'react';

import {
  MypageContainer,
  UserInfoContainer,
  UserImgSection,
  UserImage,
  UserInfoSection,
  NickNameFollowSection,
  NickName,
  FollowContainer,
  Follow,
  FollowCount,
  Follower,
  FollowerCount,
  UserModifyBtn,
  ArticleListTitle,
  ArticleListContainer,
  ArticleWrap,
  Article
} from './MypageStyle';

export default function MyPage () {
  // 1. 상태관리 요소 : userImage, userNickName, follow, follower, article
  // 2. 함수 : 회원정보수정 버튼을 누를 시 회원정보수정 모달로 연결, 무한스크롤 관련 버튼 실행 또는 액션,
  // 아티클 map으로 출력하기 -> 무한스크롤로 아티클 노출
  // 3. 렌더링 : MyPage 접속한 경우, 새로운 article이 생길 경우

  // axios로 회원 정보 조회(유저 정보 및 아티클)
  // http://localhost:4000/user/:userId

  const [isOpneModyfyModal, setIsOpenModyfyModal] = useState(false);

  // 회원정보수정 버튼 누르면 회원정보수정 모달이 나오는 함수
  const openUserInfoModify = () => {
    setIsOpenModyfyModal(true);
  };

  return (
    <>
      <MypageContainer>
        <UserInfoContainer>
          <UserImgSection>
            <UserImage />
          </UserImgSection>
          <UserInfoSection>
            <NickNameFollowSection>
              <NickName>민트초코깡</NickName>
              <FollowContainer>
                <Follow>팔로우
                  <FollowCount>123</FollowCount>
                </Follow>
                <Follower>팔로워
                  <FollowerCount>225</FollowerCount>
                </Follower>
              </FollowContainer>
            </NickNameFollowSection>
            <UserModifyBtn onClick={openUserInfoModify}>회원정보수정</UserModifyBtn>
          </UserInfoSection>
        </UserInfoContainer>
        <ArticleListTitle>수집 목록</ArticleListTitle>

        <ArticleListContainer>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
        </ArticleListContainer>

      </MypageContainer>
    </>
  );
}
