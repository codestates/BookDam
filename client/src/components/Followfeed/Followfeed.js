import React, { useState, useRef, useEffect, useCallback, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Axios from 'axios';
import data from '../../dummyfiles/dummyFeedList';
import { FaUserCheck } from 'react-icons/fa';
import userImage from '../../assets/images/defaultUserImage.png';
import { NoticeModal } from '../NoticeModal/NoticeModal';
import { useDispatch } from 'react-redux';
import { FollowInfoAction } from '../../actions/FollowInfoAction';
import { Loading } from '../../utils/Loading/Loading';
import {
  FeedContentContainer,
  UserInfoContainer,
  UserInfo,
  UserNameAndImage,
  UserImageContainer,
  UserImage,
  DefaultUserImage,
  UserNickName,
  UserFollowIcon,
  PostCreatedAt,
  ContentsContainer,
  Sentence,
  Comment,
  BookInfo
} from './FollowfeedStyle';

export const Followfeed = ({ followFeedList }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // 팔로우 취소 버튼 클릭시 알람 모달 오픈
  const [isOpen, setInOpen] = useState(false);
  const [followInfo, setFollowInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    userImage: ''
  });
  const [followFeedLists, setFolowFeedLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  // ref를 div에 걸어주면 해당 요소가 보일 때 inView가 true로, 안보이면 false로 바뀐다.
  const [ref, inView] = useInView();

  const [userInfo, setUserInfo] = useState({
    id: 1,
    userId: 'test1',
    userNickName: 'test1',
    userImage: 'blahblahblahblah'
  });

  // 서버에서 아이템을 가지고 오는 함수
  const getFolowFeedLists = useCallback(() => {
    console.log('요청보냄');
    setLoading(true);
    setTimeout(() => {
      Axios.get(`http://localhost:4000/article/${userInfo.id}?page=${page}`,
        {
          headers:
      {
        'Contnet-Type': 'application/json',
        withCredentials: true
      }
        })
        .then((res) => {
          console.log(page);
          setFolowFeedLists(followFeedLists => [...followFeedLists, ...res.data.articleData]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    setLoading(false);
  }, [page]);

  // `getFolowFeedLists` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getFolowFeedLists();
  }, [getFolowFeedLists]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  const getFollowInfo = (el) => {
    console.log(el);
    history.push({
      pathname: `/userPage/${el['User.userNickName']}`,
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
      Axios.post(`http://localhost:4000/follow/${el['Follows.user_Id']}?${el.id}`,
        {
          headers: { 'Contnet-Type': 'application/json' }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // console.log(followFeedLists)
  const feedList = followFeedLists.map((el, index) => {
    return (
      <UserInfoContainer key={index}>
        <UserInfo>
          <UserNameAndImage>
            <UserImageContainer onClick={() => getFollowInfo(el)}>
              {el['User.userImage'].length === 0
                ? <UserImage src={el['User.userImage']} />
                : <DefaultUserImage src={userImage} />}
            </UserImageContainer>
            <UserNickName onClick={() => getFollowInfo(el)}>
              {el['User.userNickName']}
            </UserNickName>
            <UserFollowIcon value onClick={() => followHandler(el)}>
              {el['User.Follows.user_Id'] === userInfo.id ? <FaUserCheck onClick={NoticeModalOpenHandler} /> : '팔로우'}
            </UserFollowIcon>
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
        <div ref={ref} />
      </UserInfoContainer>
    );
  });

  return (
    <>
      <FeedContentContainer>
        {isOpen ? <NoticeModal NoticeModalOpenHandler={NoticeModalOpenHandler} userInfo={userInfo} followInfo={followInfo} /> : null}
        {followFeedLists.length === 0
          ? <div><Loading /></div>
          : <>
            {feedList}
            {loading ? <Loading /> : null}
          </>}
      </FeedContentContainer>
    </>
  );
};
