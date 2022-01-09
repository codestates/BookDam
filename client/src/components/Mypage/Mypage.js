import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { UserModifyModal } from '../UserInfoModify/UserModifyModal';
import example from '../../assets/images/defaultUserImage.png'; // 더미 유저 이미지
import { data } from '../../dummyfiles/dummyMyFeedList';

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

axios.defaults.withCredentials = true;

export default function MyPage () {
  // 1. 상태관리 요소 : userImage, userNickName, article, follow, follower
  // 2. follow, follower : 서버에 count 요청
  // 3. 함수 : 
  // 3-1. 회원정보수정 버튼을 누를 시 회원정보수정 모달로 연결, 무한스크롤 관련 버튼 실행 또는 액션,
  // 3-2. 아티클 map으로 출력하기 -> 무한스크롤로 아티클 노출
  // 3-3. 책 썸네일을 누르면 Sentence Modal이 팝업
  // 4. 렌더링 : MyPage 접속한 경우, 새로운 article이 생길 경우 -> 회원 정보 조회 GET으로 가져오기

  // axios로 회원 정보 조회(유저 정보 및 아티클)
  // http://localhost:4000/user/:userId

  // const userState = useSelector(state => state.userInfoReducer);
  // const { userInfo } = userState;
  const [userInfo, setUserInfo] = useState({
    id: 0,
    userId: '',
    userNickName: '',
    userImage: '',
  })
  const [follow, setFollow] = useState({
    following: 0,
    follower: 0
  });
  const [articles, setArticles] = useState({
    id: 0,
    user_Id: 0,
    book_Title: '',
    book_Author: '',
    book_Thumbnail: '',
    book_Publisher: '',
    sentence: '',
    comment: '',
    createdAt: '',
  });
  const [isOpneModifyModal, setIsOpenModifyModal] = useState(false);
  const [isOpenSentenceModal, setIsOpenSentenceModal] = useState(false);

  // 회원정보수정 버튼 누르면 회원정보수정 모달이 나오는 함수
  const userInfoModifyBtnHandler = () => {
    setIsOpenModifyModal(!isOpneModifyModal);
  };
  // 회원정보수정 모달 창을 닫는 버튼(x) 함수
  const closeUserInfoModify = () => {
    setIsOpenModifyModal(!isOpneModifyModal);
  };

  // 북 썸네일을 누르면 Sentence Modal이 열리는 함수
  const openSentenceModalHandler = () => {
    console.log('클릭');
    setIsOpenSentenceModal(!isOpenSentenceModal);
  }

  
  // axios.get 회원정보 전체 조회 함수 (MyPage 접속했을 시)
  // const getUserInfoAll = () => {
  //   axios
  //     .get(`http://localhost:4000/user/${userInfo.id}`,
  //       {
  //         headers: { 'Content-Type': 'application/json' }
  //       })
  //     .then((data) => {
  //       console.log(data)
  //       setUserInfo(data.userInfo.id)
  //       setFollow()
  //       setArticles()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  const articleList = data.articleData.map((el, index) => {
    return (
        <ArticleWrap key={index}>
          <Article 
            src={el.book_Thumbnail}
            onClick={openSentenceModalHandler}
          />
        </ArticleWrap>
    )
  })

  return (
    // react suspence hook (데이터가 없을 경우, 로딩 화면) 삼항 연산자로 getUserInfoAll 함수 처리
    <>
      <MypageContainer> 
        {isOpneModifyModal
          ? <UserModifyModal
            userInfoModifyBtnHandler={userInfoModifyBtnHandler}
            closeUserInfoModify={closeUserInfoModify}
            userInfo={userInfo}
            />
          : null}
        <UserInfoContainer>
          <UserImgSection>
            <UserImage src={userInfo.userImage} />
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
              onClick={userInfoModifyBtnHandler}
            >
              회원정보수정
            </UserModifyBtn>
          </UserInfoSection>
        </UserInfoContainer>
        <ArticleListTitle>수집 목록</ArticleListTitle>
        <ArticleListContainer>
            {/* <Article src={userInfo.userImage} onClick={openSentenceModalHandler} /> */}
            {articleList}
        </ArticleListContainer>
      </MypageContainer>
    </>
  );
}
