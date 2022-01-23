import React from 'react';
import axios from 'axios';
import {
  SentenceModalBackContainer,
  SentenceContainer,
  UserInfoContainer,
  UserInfo,
  UserImageContainer,
  UserImage,
  UserNameAndImage,
  UserNickName,
  PostCreatedAt,
  ContentsContainer,
  Sentence,
  Comment,
  BookInfoWrap,
  BookTitle,
  BookAuthor,
  CloseBtnWrap,
  CloseBtn2
} from './UserSentenceModalStyle';

axios.defaults.withCredentials = true;

export const UserSentenceModal = ({ openSentenceModalHandler, articleInfo }) => {
  
  return (
    <>
      <SentenceModalBackContainer>
        <SentenceContainer>
          <UserInfoContainer>
            <UserInfo>
              <UserNameAndImage>
                <UserImageContainer>
                  <UserImage src={articleInfo.userImage} />
                </UserImageContainer>
                <UserNickName>
                  {articleInfo.userNickName}
                </UserNickName>
              </UserNameAndImage>
              <PostCreatedAt>
                {articleInfo.createdAt}
              </PostCreatedAt>
            </UserInfo>
            <ContentsContainer>
              <Sentence>
                {articleInfo.sentence}
              </Sentence>
              <Comment>
                {articleInfo.comment}
              </Comment>
            </ContentsContainer>
            <BookInfoWrap>
              <BookTitle>
                {articleInfo.book_Title}
              </BookTitle>
              <BookAuthor>
                {articleInfo.book_Author}
              </BookAuthor>
            </BookInfoWrap>
            <CloseBtnWrap>
              <CloseBtn2 onClick={openSentenceModalHandler}>
                닫기
              </CloseBtn2>
            </CloseBtnWrap>
          </UserInfoContainer>
        </SentenceContainer>
      </SentenceModalBackContainer>
    </>
  );
};
