import React from 'react';
import { useLocation } from 'react-router-dom';
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
  BookTitle,
  BookAuthor,
  CloseBtnWrap,
  CloseBtn
} from './SentenceModalStyle';
import { BiDotsVerticalRounded } from "react-icons/bi";
import example from '../../assets/images/defaultUserImage.png';

export const SetenceModal = ({ openSentenceModalHandler }) => {
  const location = useLocation();
  const articleInfo = location.state.articleInfo;

  console.log(location.state)

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
                  <UserImage src={example} />
                  <DefaultUserImage />
                </UserImageContainer>
                <UserNickName>
                  민트초코깡
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
                <BookTitle>
                  {articleInfo.book_Title}
                </BookTitle>
                <BookAuthor>
                  {articleInfo.book_Author}
                </BookAuthor>
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
  )
};