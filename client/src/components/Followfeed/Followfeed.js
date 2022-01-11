import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useInView } from "react-intersection-observer"
import Axios from 'axios';
import data from '../../dummyfiles/dummyFeedList';
import { FaUserCheck } from 'react-icons/fa';
import userImage from '../../assets/images/defaultUserImage.png';
import { NoticeModal } from '../NoticeModal/NoticeModal'
import { useDispatch } from 'react-redux';
import { FollowInfoAction } from "../../actions/FollowInfoAction"
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
  const [isOpen, setInOpen] = useState(false)
  const [followInfo, setFollowInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    userImage: '',
  })
  const [followFeedLists, setFolowFeedLists] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  // ref를 div에 걸어주면 해당 요소가 보일 때 inView가 true로, 안보이면 false로 바뀐다.
  const [ref, inView] = useInView()
  const [userInfo, setUserInfo] = useState({
    id: 1,
    userId: 'test1',
    userNickName: 'test1',
    userImage: 'blahblahblahblah',
  })

  // 스크롤 포인터로 확인하는 작업을 안거쳐도 됨
  // const scrollHeight = document.documentElement.scrollHeight;
  // const scrollTop = document.documentElement.scrollTop;
  // const clientHeight = document.documentElement.clientHeight;
  // console.log("scrollHeight", scrollHeight)
  // console.log("scrollTop", scrollTop)
  // console.log("clientHeight", clientHeight)


  // useEffect(() => {
  //   console.log("scrollHeight", scrollHeight)
  //   console.log("scrollTop", scrollTop)
  //   console.log("clientHeight", clientHeight)
  //   console.log("리랜더링중")
  // }, [scrollHeight, scrollTop, clientHeight])

//   const handleScroll = () => {
//   if(scrollTop + clientHeight >= scrollHeight) {
  //   Axios.get(`http://localhost:4000/user/${userInfo.id}`, 
  //     {
  //       headers: { 'Contnet-Type': 'application/json' }
  //     })
  //     .then((data) => {
  //       setFolowFeedLists([...followlist, ...data])
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })



  // 서버에서 아이템을 가지고 오는 함수
  const getFolowFeedLists = useCallback(async () => {
    setLoading(true)
    await Axios.get(`http://localhost:4000/article/${userInfo.id}?page=${page}`)
    .then((res) => {
      setFolowFeedLists(followFeedLists => [...followFeedLists, ...res.data.articleData])
    })
    setLoading(false)
  }, [page])

  // `getFolowFeedLists` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getFolowFeedLists()
  }, [getFolowFeedLists])

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading])
  console.log(page)

  const getFollowInfo = (el) => {
    console.log(el)
    history.push({              
      pathname: `/userPage/${el["User.userNickName"]}`,
      state: { followInfo: {
        id: el["User.id"],
        userId: el["User.userId"],
        userNickName: el["User.userNickName"],
        userImage: el["User.userImage"]
      }}})
  }
  // 노티스 모달 상태변경 함수
  const NoticeModalOpenHandler = () => {
    setInOpen(!isOpen)
  }

  // 팔로우 피드 리스트 서버요청 함수
  // const getFollowFeedList = () => {
  //   Axios.get(`http://localhost:4000/user/${userInfo.id}`, 
  //     {
  //       headers: { 'Contnet-Type': 'application/json' }
  //     })
  //     .then((data) => {
  //       setFoolowFeedLists({
  //         'Articles.user_Id': data['Articles.user_Id'],
  //         'Articles.book_Title': data['Articles.book_Title'],
  //         'Articles.book_Author': data['Articles.book_Author'],
  //         'Articles.book_Thumbnail': data['Articles.book_Thumbnail'],
  //         'Articles.book_Publisher': data['Articles.book_Publisher'],
  //         'Articles.sentense': data['Articles.sentense'],
  //         'Articles.comment': data['Articles.comment'],
  //         'Articles.createdAt': data['Articles.createdAt'],
  //         'Follows.user_Id': data['Follows.user_Id'], // 피드 작성자가 팔로우 한 아이디
  //         'Follows.follow_Id': data['Follows.follow_Id'] // 피드 작성자 아이디 = id
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // 팔로우 추가 함수
  const followHandler = (el) => {
    // el의 key값에 접근해서 핸들러 함수를 실행하면 개별실행도 가능해짐.
    // 실행할 때 조건문으로 article의 id가
    // if (el['Articles.user_Id'] !== el['Follows.follow_Id']) {
    //   Axios.post(`http://localhost:4000/follow/${el['Follows.user_Id']}?${el.id}`,
    //   {
    //     headers: { 'Contnet-Type': 'application/json' }
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  // }
};
  console.log(followFeedLists)
  const feedList = followFeedLists.map((el, index) => {
    return (
      <UserInfoContainer key={index} >
        <UserInfo>
          <UserNameAndImage>
            <UserImageContainer onClick={() => getFollowInfo(el)} >
              {el["User.userImage"].length === 0
                ? <UserImage src={el["User.userImage"]} />
                : <DefaultUserImage src={userImage} />} {/* 경로문제는 추후 수정 필요함 */}
            </UserImageContainer>
            <UserNickName onClick={() => getFollowInfo(el)} >
              {el["User.userNickName"]}
            </UserNickName>
            <UserFollowIcon value={el.id} onClick={() => followHandler(el)}>
              {el["User.Follows.user_Id"] === userInfo.id ? <FaUserCheck onClick={NoticeModalOpenHandler}/> : '팔로우'}
            </UserFollowIcon>
          </UserNameAndImage>
          <PostCreatedAt>
            {el['createdAt']}
          </PostCreatedAt>
        </UserInfo>
        <ContentsContainer>
          <Sentence>{el['sentence']}</Sentence>
          <Comment>{el['comment']}</Comment>
          <BookInfo>{el['book_Title']} | {el['book_Author']} </BookInfo>
        </ContentsContainer>
        <div ref={ref}></div>
      </UserInfoContainer>
    );
  });
  // 유저페이지가 만들어졌으면 검색한 결과가 없습니다는 검색 결과창에서 팝업되어야 함.
  return (
    <>
      <FeedContentContainer>
        {isOpen ? <NoticeModal NoticeModalOpenHandler={NoticeModalOpenHandler} followInfo={followInfo}/> : null}
        {followFeedList.length === 0
          ? <div>검색한 결과가 없습니다.</div>
          : <>
            {feedList}
          </>}
      </FeedContentContainer>
    </>
  );
};
