import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Axios from 'axios';
import { FaUserCheck } from 'react-icons/fa';
import { Loading } from '../../utils/Loading/Loading';
import { useSelector } from 'react-redux';
import { FollowNoticeModal } from '../NoticeModal/FollowNoticeModal/FollowNoticeModal';

import {
  UserPageContainer,
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
  ArticleListContainer,
  ArticleWrap,
  Article,
  UserFollowIcon
} from './UserPageStyle';

export default function UserPage () {
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();
  const [articleCnt, setArticleCnt] = useState(0);
  const [articleList, setArticleList] = useState([]);
  const [followCnt, setFollowCnt] = useState({});
  const [isfollow, setIsfollow] = useState(1);
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false);

  const location = useLocation();
  const followInfo = location.state.followInfo;

  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;

  const closeNoticeModal = () => {
    setIsOpenNoticeModal(!isOpenNoticeModal);
  };
  useEffect(() => {
    const getMyInfoAll = () => {
      if (more) {
        setLoading(true);
        setTimeout(() => {
          Axios
            .get(`http://server.bookdam.link/user/${followInfo.id}?page=${page}`,
              {
                headers: { 'Content-Type': 'application/json' }
              })
            .then((res) => {
              if (res.data.articleData.rows.length === 0) {
                setMore(false);
              }
              setIsfollow(res.data.isfollow);
              setArticleCnt(res.data.articleData.count);
              setArticleList(articleList => [...articleList, ...res.data.articleData.rows]);
              setFollowCnt({
                following: res.data.follow.following,
                follower: res.data.follow.follower
              });
            })
            .catch((err) => {
            });
          setLoading(false);
        }, 1000);
      }
    };
    getMyInfoAll();
  }, [followInfo.id, page, more]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  // 팔로우 신청 함수
  const following = () => {
    if (isfollow === 1) {
      setIsOpenNoticeModal(true);
    } else if (isfollow === 0) {
      Axios.post(`http://server.bookdam.link/follow/${userInfo.id}?follow_Id=${followInfo.id}`,
        {
          headers: { 'Contnet-Type': 'application/json' }
        })
        .then((data) => {
          setIsfollow(1);
          document.location.reload();
        })
        .catch((err) => {
        });
    }
  };

  const articles = articleList.map((el, index) => {
    return (
      <ArticleWrap key={index}>
        <Article
          src={el.book_Thumbnail}
        />
      </ArticleWrap>
    );
  });

  return (
    <>
      <UserPageContainer>
        {isOpenNoticeModal
          ? <FollowNoticeModal
              setIsfollow={setIsfollow}
              closeNoticeModal={closeNoticeModal}
              userInfo={userInfo}
              followInfo={followInfo}
            />
          : null}
        <UserInfoContainer>
          <UserImgSection>
            <UserImage src={followInfo.userImage} />
          </UserImgSection>
          <UserInfoSection>
            <NickNameFollowSection>
              <NickName>{followInfo.userNickName}</NickName>
              <div className='BtnContainer'><UserFollowIcon onClick={following}>{isfollow === 1 ? <FaUserCheck /> : <div>"팔로우"</div>}</UserFollowIcon></div>
            </NickNameFollowSection>
            <span><strong>게시글</strong> {articleCnt}
              <FollowContainer>
                <Follow>팔로우
                  <FollowCount>{followCnt.following}</FollowCount>
                </Follow>
                <Follower>팔로워
                  <FollowerCount>{followCnt.follower}</FollowerCount>
                </Follower>
              </FollowContainer>
            </span>
          </UserInfoSection>
        </UserInfoContainer>
        <ArticleListContainer>
          {articles}
        </ArticleListContainer>
        <div ref={ref}>{loading && articleList.length > 8 ? <Loading /> : null}</div>

      </UserPageContainer>
    </>
  );
}
