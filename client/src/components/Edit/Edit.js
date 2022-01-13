import standardOfjava  from  '../../assets/images/standardOfjava-thumbnail.jpeg'
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
import { SubmitConfirmModal} from '../NoticeModal/EditNoticeModal/SubmitConfirmModal';
import { TextLimitNoticeModal } from '../NoticeModal/WriteNoticeModal/TextLimitNoticeModal';

export const Edit = () => {
  // const location = useLocation()
  // const articles = location.state.articles; // MyPage 썸네일을 눌러서 넘어오는 articles 정보
  // console.log(articles)
  const userState = useSelector(state => state.userInfoReducer); //테스트용
  const articleState = useSelector(state => state.articleReducer); //테스트용
  const { isLogin, userInfo } = userState
  const { articleInfo } = articleState; // 전역저장소에서 articleInfo를 불러온다.
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [isOpenTextLimitNoticeModal, setIsOpenTextLimitNoticeModal] = useState(false);

  // const { article_Id, sentence, comment } = articleInfo;
  const [errorMessage, setErrorMessage] = useState('');
  const [inputSentence, setInputSentence] = useState(articleInfo.sentence);
  const [inputComment, setInputComment] = useState(articleInfo.comment);
  const [sentenceLength, setSentenceLength] = useState(0);
  const [commentLength, setCommentLength] = useState(0);
  const history = useHistory();

  const handleInputSentence = (e) => {
    setInputSentence(e.target.value);
    let textLength = (e.target.value).length;
    if(textLength === 121) {
      setIsOpenTextLimitNoticeModal(true);
      let setenceValue = e.target.value;
      let newSentence = setenceValue.slice(0, -1);
      setInputSentence(newSentence);
      setErrorMessage('글자수 120자까지 가능합니다.')
      //입력 자체를 제한
    } else if(textLength <= 120){
      setIsOpenTextLimitNoticeModal(false);
      setSentenceLength(textLength);
    }
  };

  const handleInputComment = (e) => {
    setInputComment(e.target.value);
    let textLength = (e.target.value).length;
    if(textLength === 61) {
      setIsOpenTextLimitNoticeModal(true);
      let commentValue = e.target.value;
      let newComment = commentValue.slice(0, -1);
      setInputComment(newComment);
      setErrorMessage('글자수 120자까지 가능합니다.')
      //입력 자체를 제한
    } else if(textLength <= 60){
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
    if(inputSentence === '' && inputSentence === '') {
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

    if (inputSentence === '' && inputComment === '') {
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
                <BookThumbnail src={standardOfjava}/>
              </BookThumbnailContainer>
            </BookImageContainer>
          </BookContainer>
        </EditPageWrapper>

        <WriteArticleWrapper>
          <WriteArticleContainer>
            <WriteTextLimitContainer>
              <WriteTextLimitResult>글자수({sentenceLength}/120자)</WriteTextLimitResult>
            </WriteTextLimitContainer>
            <WriteSentenceSection value={inputSentence} onChange={handleInputSentence} />
            <WriteTextLimitContainer>
              <WriteTextLimitResult>글자수({commentLength}/60자)</WriteTextLimitResult>
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
