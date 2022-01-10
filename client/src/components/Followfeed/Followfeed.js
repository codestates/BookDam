import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import data from '../../dummyfiles/dummyFeedList';
import { FaUserCheck } from 'react-icons/fa';
import userImage from '../../assets/images/defaultUserImage.png';
import { NoticeModal } from '../NoticeModal/NoticeModal'
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
  
  // 팔로우 취소 버튼 클릭시 알람 모달 오픈
  const [isOpen, setInOpen] = useState(false)
  const [followInfo, setFollowInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    userImage: '',
  })

  // const [followFeedList, setFoolowFeedList] = useState([{
  //   'Articles.user_Id': 0,
  //   'Articles.book_Title': '',
  //   'Articles.book_Author': '',
  //   'Articles.book_Thumbnail': '',
  //   'Articles.book_Publisher': '',
  //   'Articles.sentense': '',
  //   'Articles.comment': '',
  //   'Articles.createdAt': '',
  //   'Follows.user_Id': 0, // 피드 작성자가 팔로우 한 아이디
  //   'Follows.follow_Id': 0 // 피드 작성자 아이디 = id
  // }])

  const getFollowInfo = (el) => {
    console.log(el.id, el.userNickName)
    setFollowInfo({
      id: el.id,
      userId: el.userId,
      userNickName: el.userNickName,
      userImage: el.userImage
    })
    
    console.log("팔로우 유저정보",followInfo)
    history.push({
      pathname: `/userPage/${followInfo.userNickName}`,
      state: { followInfo: followInfo }})
  }
  

  // 노티스 모달 상태변경 함수
  const NoticeModalOpenHandler = () => {
    setInOpen(!isOpen)
  }
  const history = useHistory();

  // 팔로우 피드 리스트 서버요청 함수
  // const getFollowFeedList = () => {
  //   Axios.get(`http://localhost:4000/user/${userInfo.id}`, 
  //     {
  //       headers: { 'Contnet-Type': 'application/json' }
  //     })
  //     .then((data) => {
  //       setFoolowFeedList({
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
  const followHandler = (e) => {
    // el의 key값에 접근해서 핸들러 함수를 실행하면 개별실행도 가능해짐.
    // 실행할 때 조건문으로 article의 id가
    // console.log(e.target.value);

    // 팔로우 추가될 때
    // else {
    //   Axios.post(`http://localhost:4000/follow/${userInfo.id}?${e.target.value}`,
    //   {
    //     headers: { 'Contnet-Type': 'application/json' }
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // }
  };
  // console.log("팔로우유저 정보", followInfo)

  // const userPageMove = () => {
  //   console.log('페이지 이동 함수 실행')
    
  // }

  const feedList = followFeedList.map((el, index) => {
    return (
      <UserInfoContainer key={index} >
        <UserInfo>
          <UserNameAndImage>
            <UserImageContainer onClick={() => getFollowInfo(el)} >
              {el.userImage.length === 0
                ? <UserImage src={el.userImage} />
                : <DefaultUserImage src={userImage} />} {/* 경로문제는 추후 수정 필요함 */}
            </UserImageContainer>
            <UserNickName onClick={() => getFollowInfo(el)} >
              {el.userNickName}
            </UserNickName>
            <UserFollowIcon value={el.id} onClick={followHandler} onChange={(el) => setFollowInfo(el)}>
              {el['Articles.user_Id'] === el['Follows.follow_Id'] ? <FaUserCheck onClick={NoticeModalOpenHandler}/> : '팔로우'}
            </UserFollowIcon>
          </UserNameAndImage>
          <PostCreatedAt>
            {el['Articles.createdAt']}
          </PostCreatedAt>
        </UserInfo>
        <ContentsContainer>
          <Sentence>{el['Articles.sentense']}</Sentence>
          <Comment>{el['Articles.comment']}</Comment>
          <BookInfo>{el['Articles.book_Title']} | {el['Articles.book_Author']} </BookInfo>
        </ContentsContainer>
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
