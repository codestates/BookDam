import standardOfjava from '../../assets/images/standardOfjava-thumbnail.jpeg';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  EditWholeContainer,
  EditPageWrapper,
  BookContainer,
  BookInfoContainer,
  SearchBookInfoUpper,
  SearchContainer,
  SearchInputcontainer,
  SearchClick,
  SearchBookInfoLower,
  SearchBookTitleContainer,
  BookTitleLeftContainer,
  BookTitleRightContainer,
  BookAuthorContainer,
  BookPublisherContainer,
  BookImageContainer,
  BookThumbnailContainer,
  BookThumbnail,
  WriteArticleWrapper,
  WriteArticleContainer,
  WriteSentenceSection,
  WriteTextLimitContainer,
  WriteTextLimitResult,
  WriteCommentSection,
  ArticleButtonWrapper,
  ArticleButtonContainer,
  ArticleButtonSection,
  ButtonContainer,
  ButtonsInEdit
} from './EditStyle';
import { NoInputNoticeModal } from '../NoticeModal/EditNoticeModal/NoInputNoticeModal';
import { SubmitConfirmModal } from '../NoticeModal/EditNoticeModal/SubmitConfirmModal';
import { TextLimitNoticeModal } from '../NoticeModal/WriteNoticeModal/TextLimitNoticeModal';

export const Edit = () => {
  const location = useLocation();
  const myArticleInfo = location.state.myArticleInfo.myArticleInfo;
  const userState = useSelector(state => state.userInfoReducer); // 테스트용
  const { isLogin, userInfo } = userState;
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [isOpenTextLimitNoticeModal, setIsOpenTextLimitNoticeModal] = useState(false);

  // const { article_Id, sentence, comment } = articleInfo;
  const [errorMessage, setErrorMessage] = useState('');
  const [inputSentence, setInputSentence] = useState(myArticleInfo.sentence);
  const [inputComment, setInputComment] = useState(myArticleInfo.comment);
  const [sentenceLength, setSentenceLength] = useState(myArticleInfo.sentence.length);
  const [commentLength, setCommentLength] = useState(myArticleInfo.comment.length);
  const history = useHistory();

  const handleInputSentence = (e) => {
    setInputSentence(e.target.value);
    const textLength = (e.target.value).length;
    if (textLength === 301) {
      setIsOpenTextLimitNoticeModal(true);
      const setenceValue = e.target.value;
      const newSentence = setenceValue.slice(0, -1);
      setInputSentence(newSentence);
      setErrorMessage('(공백포함)글자수 300자까지 가능합니다.');
      // 입력 자체를 제한
    } else if (textLength <= 300) {
      setIsOpenTextLimitNoticeModal(false);
      setSentenceLength(textLength);
    }
  };

  const handleInputComment = (e) => {
    setInputComment(e.target.value);
    const textLength = (e.target.value).length;
    if (textLength === 301) {
      setIsOpenTextLimitNoticeModal(true);
      const commentValue = e.target.value;
      const newComment = commentValue.slice(0, -1);
      setInputComment(newComment);
      setErrorMessage('(공백포함)글자수 300자까지 가능합니다.');
      // 입력 자체를 제한
    } else if (textLength <= 300) {
      setIsOpenTextLimitNoticeModal(false);
      setCommentLength(textLength);
    }
  };

  const handleCloseNoticeModal = () => {
    setIsOpenNoticeModal(false);
    setIsOpenSubmitModal(false);
    setIsOpenTextLimitNoticeModal(false);
    document.body.style.overflow = 'unset';
  };

  const submitHandler = () => {
    if (inputSentence === '' && inputSentence === '') {
      setErrorMessage('내용을 입력하세요.');
      setIsOpenNoticeModal(true);
    } else {
      setErrorMessage('저장하시겠습니까?');
      setIsOpenSubmitModal(true);
      document.body.style.overflow = 'unset';
    }
  };

  const handleSubmit = async () => {
    const submitData = {
      sentence: inputSentence,
      comment: inputComment
    };

    if (inputSentence === '' && inputComment === '') {
      setErrorMessage('내용을 입력하세요.');
      setIsOpenNoticeModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      await axios({
        withCredentials: true,
        method: 'patch',
        url: `http://localhost:4000/article/${userInfo.id}?article_Id=${myArticleInfo.id}`,
        headers: {
          authorization: `Bearer: ${process.env.Client_Secret}`,
          'Content-Type': 'application/json'
        },
        data: {
          articleInfo: submitData
        }
      })
        .then((res) => {
          if (res.data.message === 'success') {
            history.push('/mypage');
          } else {
          }
        });
    }
  };

  return (
    <>
      <EditWholeContainer>
        {isOpenNoticeModal
          ? <NoInputNoticeModal errorMessage={errorMessage} handleCloseNoticeModal={handleCloseNoticeModal} />
          : null}

        {isOpenSubmitModal
          ? <SubmitConfirmModal errorMessage={errorMessage} handleSubmit={handleSubmit} handleCloseNoticeModal={handleCloseNoticeModal} />
          : null}

        {isOpenTextLimitNoticeModal
          ? <TextLimitNoticeModal errorMessage={errorMessage} handleCloseNoticeModal={handleCloseNoticeModal} />
          : null}

        <EditPageWrapper>
          <BookContainer>
            <BookInfoContainer>
              <SearchBookInfoUpper>
                {/* <SearchContainer>
                  <SearchInputcontainer />
                  <SearchClick>검색</SearchClick>
                </SearchContainer> */}
              </SearchBookInfoUpper>
              <SearchBookInfoLower>
                <SearchBookTitleContainer>
                  <BookTitleLeftContainer>도서명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{myArticleInfo.book_Title}</BookTitleRightContainer>
                </SearchBookTitleContainer>
                <BookAuthorContainer>
                  <BookTitleLeftContainer>저자명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{myArticleInfo.book_Author}</BookTitleRightContainer>
                </BookAuthorContainer>
                <BookPublisherContainer>
                  <BookTitleLeftContainer>출판사</BookTitleLeftContainer>
                  <BookTitleRightContainer>{myArticleInfo.book_Publisher}</BookTitleRightContainer>
                </BookPublisherContainer>
              </SearchBookInfoLower>
            </BookInfoContainer>
            <BookImageContainer>
              <BookThumbnailContainer>
                <BookThumbnail src={myArticleInfo.book_Thumbnail} />
              </BookThumbnailContainer>
            </BookImageContainer>
          </BookContainer>
        </EditPageWrapper>

        <WriteArticleWrapper>
          <WriteArticleContainer>
            <WriteTextLimitContainer>
              <WriteTextLimitResult>{sentenceLength}/300자</WriteTextLimitResult>
            </WriteTextLimitContainer>
            <WriteSentenceSection value={inputSentence} onChange={handleInputSentence} />
            <WriteTextLimitContainer>
              <WriteTextLimitResult>{commentLength}/300자</WriteTextLimitResult>
            </WriteTextLimitContainer>
            <WriteCommentSection value={inputComment} onChange={handleInputComment} />
          </WriteArticleContainer>
        </WriteArticleWrapper>

        <ArticleButtonWrapper>
          <ArticleButtonContainer>
            <ArticleButtonSection>
              <ButtonContainer>
                <ButtonsInEdit onClick={submitHandler}>저장하기</ButtonsInEdit>
              </ButtonContainer>
            </ArticleButtonSection>
          </ArticleButtonContainer>
        </ArticleButtonWrapper>
      </EditWholeContainer>
    </>
  );
};
