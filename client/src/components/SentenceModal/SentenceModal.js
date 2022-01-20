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
  const [isOpenArticleNotice, setIsOpenArticleNotice] = useState(false); // 아티클 노티스 모달 오픈
  const [myArticleInfo, setMyArticleInfo] = useState(articleInfo); // write page로 넘기는 상태

  // SentenceModal 속 menu 모달 여는 함수
  const openMeunHandler = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  // 삭제 버튼을 눌렀을 경우 열리는 노티스 모달 여는 함수
  const openArticleNoticeHandler = () => {
    setIsOpenArticleNotice(!isOpenArticleNotice);
  }

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

  // 아티클을 삭제 하는 함수
  const deleteArticle = () => {
    axios
      .delete(`https://server.bookdam.link/article/${userInfo.id}?article_Id=${myArticleInfo.id}`)
      .then((data) => {
        document.location.reload();
      })
      .catch((err) => {
      
      });
  };

  // 삭제 완료 노티스 모달
  const deleteNoticModalHandler = () => {
    setIsOpenArticleNotice(false);
    setIsOpenSentenceModal(false);
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
                {isOpenArticleNotice
                  ? <ArticleNoticeModal
                      deleteNoticModalHandler={deleteNoticModalHandler}
                      deleteArticle={deleteArticle}
                    />
                  : null}
                  <Delete onClick={openArticleNoticeHandler}>
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
