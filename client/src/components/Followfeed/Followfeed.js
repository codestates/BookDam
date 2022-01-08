import React, { useState, useRef } from 'react';
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

  const followHandler = (e) => {
    // el의 key값에 접근해서 핸들러 함수를 실행하면 개별실행도 가능해짐.
    // 실행할 때 조건문으로 article의 id가

    console.log(e.target.value);

    // 팔로우가 삭제될 때
    // if (isFollow === false) {
    //   Axios.delete(`http://localhost:4000/follow/${userInfo.id}?${e.target.value}`,
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
    //   Axios.post(`http://localhost:4000/follow/${userInfo.id}?${e.target.value}`,
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

  // 팔로우 정보까지 서버에서 받아와야 팔로우 아이콘 기능구현이 가능함.
  // 팔로우 정보를 조회해서 팔로우 아이콘 클릭시마다 아이콘 변경해주는 함수와 함께 서버에 팔로우 삭제||등록 요청을 보내야 함.

  const feedList = followFeedList.map((el, index) => {
    return (
      <UserInfoContainer key={index}>
        <UserInfo>
          <UserNameAndImage>
            <UserImageContainer>
              {el.userImage.length === 0
                ? <UserImage src={el.userImage} />
                : <DefaultUserImage src={userImage} />} {/* 경로문제는 추후 수정 필요함 */}
            </UserImageContainer>
            <UserNickName>
              {el.userNickName}
            </UserNickName>
            <UserFollowIcon value={el.user_id} onClick={followHandler}>
              {el['Articles.user_Id'] === el['Follows.follow_Id'] ? '팔로우' : '팔로우 추가'}

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
