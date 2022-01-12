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
  WriteCommentSection,
  ArticleButtonWrapper,
  ArticleButtonContainer,
  ArticleButtonSection,
  ButtonContainer,
  ButtonsInEdit
} from './EditStyle';
import { NoInputNoticeModal } from '../NoticeModal/EditNoticeModal/NoInputNoticeModal';
import { SubmitConfirmModal} from '../NoticeModal/EditNoticeModal/SubmitConfirmModal';

export const Edit = () => {
  // const location = useLocation()
  // const articles = location.state.articles; // MyPage 썸네일을 눌러서 넘어오는 articles 정보
  // console.log(articles)
  const userState = useSelector(state => state.userInfoReducer); //테스트용
  const articleState = useSelector(state => state.articleReducer); //테스트용
  const { userInfo } = userState
  const { articleInfo } = articleState; // 전역저장소에서 articleInfo를 불러온다.
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);

  // const { article_Id, sentence, comment } = articleInfo;
  const [errorMessage, setErrorMessage] = useState('');
  const [inputSentence, setInputSentence] = useState(articleInfo.sentence);
  const [inputComment, setInputComment] = useState(articleInfo.comment);
  const history = useHistory();

  //* --- SentenceModal에서 넘겨주는 myArticleImfo 받아오는 변수 ---//
  const location = useLocation()
  const myArticleInfo = location.state.myArticleInfo;
  console.log('SentenceModal로부터: ', myArticleInfo)

  const handleInputSentence = (e) => {
    setInputSentence(e.target.value);
  };

  const handleInputComment = (e) => {
    setInputComment(e.target.value);
  };

  const handleCloseNoticeModal = () => {
    setIsOpenNoticeModal(false);
    setIsOpenSubmitModal(false);
    document.body.style.overflow = 'unset';
  };
  
  const submitHandler = () => {
    if(inputSentence === '' || inputSentence === '') {
      setErrorMessage('내용을 입력하세요.')
      setIsOpenNoticeModal(true);
    } else {
      setErrorMessage('저장하시겠습니까?')
      setIsOpenSubmitModal(true);
      document.body.style.overflow = 'unset'; 
    }
  };

  const handleSubmit = async () => {
    const submitData = {
      sentence: inputSentence,
      comment: inputComment
    };

    if (inputSentence === '' || inputComment === '') {
      setErrorMessage('내용을 입력하세요.')
      setIsOpenNoticeModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      await axios({
        withCredentials: true,
        method: 'patch',
        url: `http://localhost:4000/article/${userInfo.id}?article_Id=${articleInfo.id}`,
        headers: {
          authorization: `Bearer: ${process.env.Client_Secret}`,
          'Content-Type': 'application/json'
        },
        data: {
          articleInfo: submitData
        }
      })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message === 'success') {
            console.log('저장이 완료되었습니다.');
            history.push('/mypage');
          } else {
            console.log('정상적인 접근이 아닙니다.');
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
          ? <SubmitConfirmModal errorMessage={errorMessage} handleSubmit={handleSubmit} handleCloseNoticeModal={handleCloseNoticeModal}/>
          : null}
         
        <EditPageWrapper>
          <BookContainer>
            <BookInfoContainer>
              <SearchBookInfoUpper>
                <SearchContainer>
                  <SearchInputcontainer />
                  <SearchClick>검색</SearchClick>
                </SearchContainer>
              </SearchBookInfoUpper>
              <SearchBookInfoLower>
                <SearchBookTitleContainer>
                  <BookTitleLeftContainer>도서명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{articleInfo.book_Title}</BookTitleRightContainer>
                </SearchBookTitleContainer>
                <BookAuthorContainer>
                  <BookTitleLeftContainer>저자명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{articleInfo.book_Author}</BookTitleRightContainer>
                </BookAuthorContainer>
                <BookPublisherContainer>
                  <BookTitleLeftContainer>출판사</BookTitleLeftContainer>
                  <BookTitleRightContainer>{articleInfo.book_Publisher}</BookTitleRightContainer>
                </BookPublisherContainer>
              </SearchBookInfoLower>
            </BookInfoContainer>
            <BookImageContainer>
              <BookThumbnailContainer>
                <BookThumbnail />
              </BookThumbnailContainer>
            </BookImageContainer>
          </BookContainer>
        </EditPageWrapper>

        <WriteArticleWrapper>
          <WriteArticleContainer>
            <WriteSentenceSection value={inputSentence} onChange={handleInputSentence} />
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
