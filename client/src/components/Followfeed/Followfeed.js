import React, { useState } from 'react';
import Axios from 'axios';
import data from '../../dummyfiles/dummyFeedList';
import { FaUserPlus, FaUserAltSlash, FaUserCheck } from 'react-icons/fa';
import userImage from '../../assets/images/defaultUserImage.png';
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
  const [isFollow, setIsFollow] = useState(true);
  // 팔로우 상태로 관리하게되면 클릭시 일괄적용되기 때문에
  // 개별로 접근해서 팔로우상태를 변경하는 함수가 필요함

  const followHandler = () => {
    setIsFollow(!isFollow);
    // 팔로우가 삭제될 때
    // if (isFollow === false) {
    //   Axios.delete(`http://localhost:4000/follow/${userInfo.id}?followId=3`,
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
    // 팔로우 추가될 때
    // else {
    //   Axios.post(`http://localhost:4000/follow/${userInfo.id}?followId=3`,
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


  // const isFollowCheck = (following) => {
  //   for (let i = 0; i < followFeedList.length; i++) {
  //     if (followFeedList[i].userId === following) {
  //       return <FaUserCheck/>
  //     } else {
  //       return <FaUserPlus/>
  //     }
  //   }
  // }

  // 팔로우 정보까지 서버에서 받아와야 팔로우 아이콘 기능구현이 가능함.
  // 팔로우 정보를 조회해서 팔로우 아이콘 클릭시마다 아이콘 변경해주는 함수와 함께 서버에 팔로우 삭제||등록 요청을 보내야 함.
  
  const feedList = followFeedList.map((el) => {
    return (
      <UserInfoContainer>
        <UserInfo>
          <UserNameAndImage>
            <UserImageContainer>
              {el.userImage
                ? <UserImage src={el.userImage} />
                : <DefaultUserImage src={userImage} />}
            </UserImageContainer>
            <UserNickName>
              {el.userNickName}
            </UserNickName>
            <UserFollowIcon onClick={followHandler}>
              {isFollow ? <FaUserCheck/> : <FaUserPlus/>}
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
      </UserInfoContainer>
    );
  });
  console.log(followFeedList);

  return (
    <>
      <FeedContentContainer>
        {followFeedList.length === 0
          ? <div>검색한 결과가 없습니다.</div>
          : <>
            {feedList}
          </>}
      </FeedContentContainer>
    </>
  );
};
