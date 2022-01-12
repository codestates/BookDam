import React from 'react';
import {
  SentenceModalBackContainer,
  SentenceContainer,
  UserInfoContainer,
  EditWrap,
  UserInfo,
  UserImageContainer,
  UserImage,
  DefaultUserImage,
  UserNameAndImage,
  UserNickName,
  PostCreatedAt,
  ContentsContainer,
  Sentence,
  Comment,
  BookInfo,
  CloseBtnWrap,
  CloseBtn
} from './SentenceModalStyle';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export const SetenceModal = ({ openSentenceModalHandler }) => {
  return (
    <>
      <SentenceModalBackContainer>
        {/* <SentenceContainer> */}
        <UserInfoContainer>
          <EditWrap>
            <div>
              <BiDotsVerticalRounded />
            </div>
          </EditWrap>
          <UserInfo>
            <UserNameAndImage>
              <UserImageContainer>
                <UserImage />
                <DefaultUserImage />
              </UserImageContainer>
              <UserNickName />
            </UserNameAndImage>
            <PostCreatedAt />
          </UserInfo>
          <ContentsContainer>
            <Sentence />
            <Comment />
            <BookInfo />
          </ContentsContainer>
          <CloseBtnWrap>
            <CloseBtn onClick={openSentenceModalHandler}>
              닫기
            </CloseBtn>
          </CloseBtnWrap>
        </UserInfoContainer>
        {/* </SentenceContainer> */}
      </SentenceModalBackContainer>
    </>
  );
};
