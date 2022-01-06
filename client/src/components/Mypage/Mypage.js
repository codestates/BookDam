import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserModifyModal } from '../UserInfoModify/UserModifyModal';
import example from '../../assets/images/defaultUserImage.png';

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
  // 1. 상태관리 요소 : userImage, userNickName, article, follow, follower
  // 2. follow, follower : 서버에 count 요청
  // 3. 함수 : 회원정보수정 버튼을 누를 시 회원정보수정 모달로 연결, 무한스크롤 관련 버튼 실행 또는 액션,
  // 아티클 map으로 출력하기 -> 무한스크롤로 아티클 노출
  // 4. 렌더링 : MyPage 접속한 경우, 새로운 article이 생길 경우 -> 회원 정보 조회 GET으로 가져오기

  // axios로 회원 정보 조회(유저 정보 및 아티클)
  // http://localhost:4000/user/:userId

  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;

  const [isOpneModifyModal, setIsOpenModifyModal] = useState(false);

  // 회원정보수정 버튼 누르면 회원정보수정 모달이 나오는 함수
  const openUserInfoModify = () => {
    setIsOpenModifyModal(true);
  };
  // 회원정보수정 모달 창을 닫는 함수
  const closeUserInfoModify = () => {
    setIsOpenModifyModal(false);
  };

  return (
    // axios.get 회원정보 조회
    <>
      <MypageContainer>
        {isOpneModifyModal
          ? <UserModifyModal
              closeUserInfoModify={closeUserInfoModify} userInfo={userInfo}
            />
          : null}
        <UserInfoContainer>
          <UserImgSection>
            <UserImage src={example} />
          </UserImgSection>
          <UserInfoSection>
            <NickNameFollowSection>
              <NickName>{userInfo.userNickName}</NickName>
              <FollowContainer>
                <Follow>팔로우
                  <FollowCount>123</FollowCount>
                </Follow>
                <Follower>팔로워
                  <FollowerCount>225</FollowerCount>
                </Follower>
              </FollowContainer>
            </NickNameFollowSection>
            <UserModifyBtn
              onClick={openUserInfoModify}
            >
              회원정보수정
            </UserModifyBtn>
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
