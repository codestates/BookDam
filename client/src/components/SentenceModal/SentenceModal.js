import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SentenceModalBackContainer,
  SentenceContainer,
  UserInfoContainer,
  EditWrapper,
  EditMenuWrapper,
  Edit,
  Delete,
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
  BookInfoWrap,
  BookTitle,
  BookAuthor,
  CloseBtnWrap,
  CloseBtn
} from './SentenceModalStyle';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import example from '../../assets/images/defaultUserImage.png';

export const SetenceModal = ({ openSentenceModalHandler }) => {
  const location = useLocation();
  const articleInfo = location.state.articleInfo;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMeunHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <SentenceModalBackContainer>
        <SentenceContainer>
          <UserInfoContainer>
            <EditWrapper onClick={openMeunHandler}>
              <div>
                <BiDotsVerticalRounded />
              </div>
            </EditWrapper>
            {isOpenMenu
              ? <EditMenuWrapper>
                <Edit>편집</Edit>
                <Delete>삭제</Delete>
              </EditMenuWrapper>
              : null}
            <UserInfo>
              <UserNameAndImage>
                <UserImageContainer>
                  <UserImage src={example} />
                  <DefaultUserImage />
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
              <CloseBtn onClick={openSentenceModalHandler}>
                닫기
              </CloseBtn>
            </CloseBtnWrap>
          </UserInfoContainer>
        </SentenceContainer>
      </SentenceModalBackContainer>
    </>
  );
};
