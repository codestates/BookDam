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
import { BiDotsVerticalRounded } from 'react-icons/bi';
import example from '../../assets/images/defaultUserImage.png';
import { ArticleNoticeModal } from '../../components/NoticeModal/ArticleNoticeModal/ArticlesNoticeModal';

axios.defaults.withCredentials = true;

export const SetenceModal = ({ openSentenceModalHandler, setIsOpenSentenceModal }) => {
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;
  const history = useHistory();
  const location = useLocation();
  const articleInfo = location.state.articleInfo;
  const [isOpenMenu, setIsOpenMenu] = useState(false); // 삭제, 편집 메뉴 모달 오픈
  const [myArticleInfo, setMyArticleInfo] = useState(articleInfo); // write page로 넘기는 상태
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const openMeunHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const sendToEditPage = () => {
    history.push({
      pathname: '/editpage',
      state: {
        myArticleInfo: {
          myArticleInfo
        }
      }
    });
  };

  const deleteArticle = () => {
    axios
      .delete(`http://localhost:4000/article/${userInfo.id}?article_Id=${myArticleInfo.id}`)
      .then((data) => {
        setIsDeleteSuccess(true);
        setErrorMessage('수집하신 문장이 삭제되었습니다');
        document.location.reload();
      })
      .catch((err) => {
      
      });
  };
  // 삭제 완료 노티스 모달
  const deleteNoticModalHandler = () => {
    setIsOpenSentenceModal(false);
    setIsDeleteSuccess(false);
    setIsOpenMenu(false);
  };

  return (
    <>
      <SentenceModalBackContainer>
        <SentenceContainer>
          <UserInfoContainer>
            <EditWrapper onClick={(e) => e.stopPropagation()}>
              <div onClick={openMeunHandler}>
                <BiDotsVerticalRounded />
              </div>
            </EditWrapper>
            {isOpenMenu
              ? <EditMenuWrapper>
                <Edit
                  onClick={sendToEditPage}
                >
                  편집
                </Edit>
                {isDeleteSuccess
                  ? <ArticleNoticeModal
                      errorMessage={errorMessage}
                      deleteNoticModalHandler={deleteNoticModalHandler}
                    />
                  : null}
                <Delete onClick={deleteArticle}>
                  삭제
                </Delete>
              </EditMenuWrapper>
              : null}
            <UserInfo>
              <UserNameAndImage>
                <UserImageContainer>
                  <UserImage src={example} />
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
