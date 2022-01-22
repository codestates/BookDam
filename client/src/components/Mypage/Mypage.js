import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { UserModifyModal } from '../UserInfoModify/UserModifyModal';
import { SentenceModal } from '../SentenceModal/SentenceModal';
import { IsGuestNoticeModal } from '../../components/NoticeModal/UserModifyNoticeModal/IsGuestNoticeModal';
import { Loading } from '../../utils/Loading/Loading';
import {
  MyPageWholeContainer,
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
  ArticleListContainer,
  ArticleWrap,
  Article
} from './MypageStyle';

axios.defaults.withCredentials = true;

export default function MyPage () {
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;
  const [myUserInfo, setMyUserInfo] = useState({
    id: 0,
    userId: '',
    userNickName: '',
    userImage: ''
  });
  const [follow, setFollow] = useState({
    following: 0,
    follower: 0
  });
  const [more, setMore] = useState(true);
  const [myArticleList, setMyArticleList] = useState([]);
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false);
  const [isOpneModifyModal, setIsOpenModifyModal] = useState(false);
  const [isOpenSentenceModal, setIsOpenSentenceModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(0); // 무한 스크롤시 페이지 필요
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView(); // react-intersection-observer -> div가 viewport에 보여질 때 inView 값이 true
  const history = useHistory();

  // 회원정보수정 모달을 닫는 함수
  const closeNoticeModal = () => {
    setIsOpenNoticeModal(!isOpenNoticeModal);
  };

  // 회원정보수정 버튼 누르면 회원정보수정 모달이 나오는 함수
  const userInfoModifyBtnHandler = () => {
    if (userInfo.userId === 'guest') {
      setErrorMessage('로그인 후 이용하세요');
      setIsOpenNoticeModal(!isOpenNoticeModal);
    } else {
      setIsOpenModifyModal(!isOpneModifyModal);
    }
  };
  // 회원정보수정 모달 안에 있는 닫기(x)버튼 함수
  const closeUserInfoModify = () => {
    setIsOpenModifyModal(!isOpneModifyModal);
  };

  // 북 썸네일을 누르면 SentenceModal이 나오는 함수
  const openSentenceModalHandler = (el) => {
    setIsOpenSentenceModal(!isOpenSentenceModal);
    if (isOpenSentenceModal) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }

    history.push({
      state: {
        articleInfo: {
          id: el.id,
          userNickName: el['User.userNickName'],
          userImage: el['User.userImage'],
          book_Title: el.book_Title,
          book_Author: el.book_Author,
          book_Publisher: el.book_Publisher,
          sentence: el.sentence,
          comment: el.comment,
          createdAt: el.createdAt
        }
      }
    });
  };

  // 내 정보 전체를 조회하는 함수 (무한 스크롤 적용)
  useEffect(() => {
    let cleanUp = true;
    const getMyInfoAll = () => {
      if (more) {
        setLoading(true);
        setTimeout(async () => {
          if (cleanUp) {
            await axios
              .get(`https://server.bookdam.link/user/${userInfo.id}?page=${page}`,
                {
                  headers: { 'Content-Type': 'application/json' }
                })
              .then((res) => {
                if (res.data.articleData.rows.length === 0) {
                  setMore(false);
                }
                setMyArticleList(myArticleList => [...myArticleList, ...res.data.articleData.rows]);
                setMyUserInfo({
                  id: res.data.userInfo.id,
                  userId: res.data.userInfo.userId,
                  userNickName: res.data.userInfo.userNickName,
                  userImage: res.data.userInfo.userImage
                });
                setFollow({
                  following: res.data.follow.following,
                  follower: res.data.follow.follower
                });
              })
              .catch((err) => {
              });
            setLoading(false);
          }
        }, 1000);
      }
    };
    getMyInfoAll();
    return () => {
      cleanUp = false;
    };
  }, [userInfo.id, page, more]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  const myArticles = myArticleList.map((el, index) => {
    return (
      <ArticleWrap key={el.id}>
        <Article
          src={el.book_Thumbnail}
          onClick={() => openSentenceModalHandler(el)}
        />
      </ArticleWrap>
    );
  });

  // 내 정보(닉네임, 유저이미지)를 업데이트 하는 함수
  const updateMyInfo = (data) => {
    setMyUserInfo(data);
  };

  // 내 아티클을 업데이트 하는 함수
  const updateMyArticles = (data) => {
    setMyArticleList(data);
  };

  return (
    <>
      <MyPageWholeContainer>
        <MypageContainer>
          {isOpneModifyModal
            ? <UserModifyModal
                userInfoModifyBtnHandler={userInfoModifyBtnHandler}
                closeUserInfoModify={closeUserInfoModify}
                myUserInfo={myUserInfo}
                setIsOpenModifyModal={setIsOpenModifyModal}
                updateUserInfo={updateMyInfo}
              />
            : null}
          {isOpenSentenceModal
            ? <SentenceModal
                openSentenceModalHandler={openSentenceModalHandler}
                setIsOpenSentenceModal={setIsOpenSentenceModal}
                updateMyArticles={updateMyArticles}
                myArticleList={myArticleList}
              />
            : null}
          <UserInfoContainer>
            <div className='space' />
            <UserImgSection>
              <UserImage src={myUserInfo.userImage} />
            </UserImgSection>
            <UserInfoSection>
              <NickNameFollowSection>
                <NickName>{myUserInfo.userNickName}</NickName>
                <FollowContainer>
                  <Follow>팔로우
                    <FollowCount>{follow.following}</FollowCount>
                  </Follow>
                  <Follower>팔로워
                    <FollowerCount>{follow.follower}</FollowerCount>
                  </Follower>
                </FollowContainer>
              </NickNameFollowSection>
              {isOpenNoticeModal
                ? <IsGuestNoticeModal
                    errorMessage={errorMessage}
                    closeNoticeModal={closeNoticeModal}
                  />
                : null}
              <UserModifyBtn
                onClick={userInfoModifyBtnHandler}
                setIsOpenModifyModal={setIsOpenModifyModal}
              >
                회원정보수정
              </UserModifyBtn>
            </UserInfoSection>
          </UserInfoContainer>
          <ArticleListContainer>
            {myArticleList.length === 0 && !loading
              ? <div className='nodata'>당신의 문장들을 채워주세요!</div>
              : myArticles}
          </ArticleListContainer>
          <div ref={ref}>
            {loading && myArticleList.length > 8 ? <Loading /> : null}
          </div>
        </MypageContainer>
      </MyPageWholeContainer>
    </>
  );
}
