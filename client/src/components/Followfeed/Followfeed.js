import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Axios from 'axios';
import { FaCaretUp } from 'react-icons/fa';
import { NoticeModal } from '../NoticeModal/NoticeModal';
import { useSelector } from 'react-redux';
import { Loading } from '../../utils/Loading/Loading';
import {
  FeedContentContainer,
  UserInfoContainer,
  UserInfo,
  UserNameAndImage,
  UserImageContainer,
  UserImage,
  UserNickName,
  PostCreatedAt,
  ContentsContainer,
  Sentence,
  Comment,
  BookInfo
} from './FollowfeedStyle';

export const Followfeed = () => {
  const [isOpen, setInOpen] = useState(false);
  const [more, setMore] = useState(true);
  const [followFeedLists, setFolowFeedLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();
  const [followInfo, setFollowInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    userImage: ''
  });

  const history = useHistory();
  const userInfo = useSelector(state => state.userInfoReducer);

  // 서버에서 아이템을 가지고 오는 함수
  useEffect(() => {
    let cleanUp = true;
    function getFollowFeedLists () {
      if (more) {
        setLoading(true);
        setTimeout(async () => {
          if (cleanUp) {
            await Axios({
              method: 'get',
              url: `https://server.bookdam.link/article/${userInfo.userInfo.id}?page=${page}`,
              withCredentials: true,
              headers: {
                'Contnet-Type': 'application/json'
              }
            })
              .then((res) => {
                if (res.data.articleData.length === 0) {
                  setMore(false);
                }
                setFolowFeedLists(followFeedLists => [...followFeedLists, ...res.data.articleData]);
                setLoading(false);
              });
          }
        }, 1000);
      }
    }
    getFollowFeedLists();
    return () => {
      cleanUp = false;
    };
  }, [userInfo.userInfo.id, page, more]);

  useEffect(() => {
    const abortController = new AbortController();
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
    }
    return () => {
      abortController.abort();
    };
  }, [inView, loading]);

  const getFollowInfo = (el) => {
    history.push({
      pathname: `/userPage/${el['User.userId']}`,
      state: {
        followInfo: {
          id: el['User.id'],
          userId: el['User.userId'],
          userNickName: el['User.userNickName'],
          userImage: el['User.userImage']
        }
      }
    });
  };
  // 노티스 모달 상태변경 함수
  const NoticeModalOpenHandler = () => {
    setInOpen(!isOpen);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  // 팔로우 추가 함수
  const followHandler = (el) => {
    setFollowInfo({
      id: el['User.id'],
      userId: el['User.userId'],
      userNickName: el['User.userNickName'],
      userImage: el['User.userImage']
    });
    // el의 key값에 접근해서 핸들러 함수를 실행하면 개별실행도 가능해짐.
    // 실행할 때 조건문으로 article의 id가
    if (el['User.Follows.user_Id'] !== userInfo.id) {
      Axios.post(`https://server.bookdam.link/follow/${el['Follows.user_Id']}?follow_Id=${el.id}`,
        {
          headers: { 'Contnet-Type': 'application/json' }
        })
        .then((data) => {
        })
        .catch((err) => {
        });
    }
  };
  const feedList = followFeedLists.map((el) => {
    return (
      <UserInfoContainer ref={ref} key={el.id}>
        <UserInfo>
          <UserNameAndImage>
            <UserImageContainer onClick={() => getFollowInfo(el)}>
              <UserImage src={el['User.userImage']} />
            </UserImageContainer>
            <UserNickName onClick={() => getFollowInfo(el)}>
              {el['User.userNickName']}
            </UserNickName>
            {/* <UserFollowIcon value onClick={() => followHandler(el)}>
              {el['User.Follows.user_Id'] === userInfo.userInfo.id ? <FaUserCheck onClick={NoticeModalOpenHandler} /> : '팔로우'}
            </UserFollowIcon> */}
          </UserNameAndImage>
          <PostCreatedAt>
            {el.createdAt}
          </PostCreatedAt>
        </UserInfo>
        <ContentsContainer>
          <Sentence>{el.sentence}</Sentence>
          <Comment>{el.comment}</Comment>
          <BookInfo>{el.book_Title} | {el.book_Author} </BookInfo>
        </ContentsContainer>
      </UserInfoContainer>
    );
  });

  return (
    <>
      <FeedContentContainer>
        <div className='scrollTop' onClick={scrollTop}>
          <FaCaretUp />Top
        </div>
        {isOpen ? <NoticeModal NoticeModalOpenHandler={NoticeModalOpenHandler} userInfo={userInfo} followInfo={followInfo} /> : null}
        {followFeedLists.length === 0 && !loading ? <div className='nodata'>팔로우가 작성한 피드가 없습니다.</div> : feedList}
        <div ref={ref}>{loading ? <Loading /> : null}</div>
      </FeedContentContainer>
    </>
  );
};
