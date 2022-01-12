import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
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
import { BiDotsVerticalRounded } from "react-icons/bi";
import example from '../../assets/images/defaultUserImage.png';

axios.defaults.withCredentials = true;

export const SetenceModal = ({ openSentenceModalHandler }) => {
  const location = useLocation();
  const history = useHistory();
  const articleInfo = location.state.articleInfo;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [myArticleInfo, setMyArticleInfo] = useState(articleInfo);
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;

  const openMeunHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const sendToEditPage = () => {
    history.push({
      pathname:`/editpage`,
      state: {
        myArticleInfo : {
          myArticleInfo
        }
      }
    })
  };

  // DELETE http://localhost:4000/article/:user_Id?article_Id=6
  const deleteArticle = () => {
    axios
      .delete(`http://localhost:4000/article/${userInfo.id}?${myArticleInfo.id}`)
      .then((data) => {
        console.log('아티클이 삭제되었습니다');
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
          {isOpenMenu ? 
            <EditMenuWrapper>
            <Edit 
              onClick={sendToEditPage}>
              편집
            </Edit>
            <Delete onClick={deleteArticle}>
              삭제
            </Delete>
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
