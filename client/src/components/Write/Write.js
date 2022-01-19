import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  WriteWholeContainer,
  SearchBookWrapper,
  SearchBookContainer,
  SearchBookInfoContainer,
  SearchBookInfoUpper,
  SearchContainer,
  SearchInputcontainer,
  SearchClick,
  SearchBookInfoLower,
  SearchBookTitleContainer,
  BookTitleLeftContainer,
  BookTitleRightContainer,
  SearchBookAuthorContainer,
  SearchBookPublisherContainer,
  SearchBookImageContainer,
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
  ButtonsInWrite
} from './WriteStyle';
import { GuestLoginModal } from '../GuestLoginModal/GuestLoginModal';
import { SignupModal } from '../Signup/SignupModal';
import { BookSearchModal } from '../BookSearchModal/BookSearchModal';
import { NoInputNoticeModal } from '../NoticeModal/WriteNoticeModal/NoInputNoticeModal';
import { SubmitConfirmModal } from '../NoticeModal/WriteNoticeModal/SubmitConfirmModal';
import { TextLimitNoticeModal } from '../NoticeModal/WriteNoticeModal/TextLimitNoticeModal';

export const Write = () => {
  const state = useSelector(state => state.userInfoReducer); // 로그인 상태변경용
  const { isLogin, userInfo } = state; // 로그인 상태변경용
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false);
  const [isOpenBookSearchModal, setIsOpenBookSearchModal] = useState(false);
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [isOpenTextLimitNoticeModal, setIsOpenTextLimitNoticeModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    title: '', author: '', publisher: '', image: ''
  });
  const [inputSentence, setInputSentence] = useState('');
  const [inputComment, setInputComment] = useState('');
  const [sentenceLength, setSentenceLength] = useState(0);
  const [commentLength, setCommentLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue) {
      bookSearch();
    }
  };

  const bookSearch = async () => { // 도서 검색 버튼
    if (inputValue) {
      setIsOpenBookSearchModal(true);
      document.body.style.overflow = 'hidden'; // 스크롤 방지 설정
      setIsLoading(true);

      axios({
        withCredentials: true,
        method: 'get',
        url: `http://server.bookdam.link/search/book?query=${inputValue}`,
        headers: {
          authorization: `Bearer: ${process.env.Client_Secret}`,
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          const resultData = [];
          // eslint-disable-next-line array-callback-return
          res.data.map((list) => {
            resultData.push({
              itemId: list.$.itemId,
              title: list.title[0],
              image: list.cover[0],
              author: list.author[0],
              publisher: list.publisher[0]
            });
          });
          setIsLoading(false);
          setSearchData(resultData);
        })
        .catch(err => {

        });
    } else {
      setErrorMessage('검색어를 입력하세요.');
    }
  };

  const handleSelect = (idx) => { // 검색된 도서 선택하여 가져오기
    setInputValue('');
    // eslint-disable-next-line array-callback-return
    searchData.map((el, id) => {
      if (id === idx) {
        setSelectedData(el);
      }
    });
    setIsOpenBookSearchModal(false);
    document.body.style.overflow = 'unset'; // 스크롤 방지 설정
  };

  const handleInputSentence = (e) => {
    if (isLogin === false) {
      setInputSentence('');
      setIsOpenLoginModal(true);
    } else {
      setInputSentence(e.target.value);
      const textLength = (e.target.value).length;
      if (textLength === 301) {
        setIsOpenTextLimitNoticeModal(true);
        setErrorMessage('글자수 300자까지 가능합니다.');
        const setenceValue = e.target.value;
        const newSentence = setenceValue.slice(0, -1);
        setInputSentence(newSentence);
        // 입력 자체를 제한
      } else if (textLength <= 300) {
        setIsOpenTextLimitNoticeModal(false);
        setSentenceLength(textLength);
      }
    }
  };

  const handleInputComment = (e) => {
    if (isLogin === false) {
      setInputComment('');
      setIsOpenLoginModal(true);
    } else {
      setInputComment(e.target.value);
      const textLength = (e.target.value).length;
      if (textLength === 301) {
        setIsOpenTextLimitNoticeModal(true);
        setErrorMessage('글자수 300자까지 가능합니다.');
        const commentValue = e.target.value;
        const newComment = commentValue.slice(0, -1);
        setInputComment(newComment);
        // 입력 자체를 제한
      } else if (textLength <= 300) {
        setIsOpenTextLimitNoticeModal(false);
        setCommentLength(textLength);
      }
    }
  };

  const handleLoginModal = () => { // 버튼 클릭시 로그인 모달 열기
    setIsOpenSignupModal(false);
    setIsOpenLoginModal(true);
    document.body.style.overflow = 'hidden'; // Login 모달창 열면서 스크롤 방지
  };

  const handleSignupModal = () => { // 버튼 클릭시 회원가입 모달 열기
    setIsOpenLoginModal(false);
    setIsOpenSignupModal(true);
    document.body.style.overflow = 'hidden'; // Signup 모달창 열면서 스크롤 방지
  };

  const handleCloseSignupModal = () => { // 버튼 클릭시 회원가입 모달 닫기
    setIsOpenSignupModal(false);
    document.body.style.overflow = 'unset';
  };

  const handleCloseNoticeModal = () => {
    setIsOpenNoticeModal(false);
    setIsOpenSubmitModal(false);
    setIsOpenTextLimitNoticeModal(false);
    document.body.style.overflow = 'unset';
  };

  const submitHandler = () => {
    if (isLogin) {
      if (selectedData.title === '' || (inputSentence === '' && inputSentence === '')) {
        setErrorMessage('내용을 입력하세요.');
        setIsOpenNoticeModal(true);
      } else {
        setErrorMessage('저장하시겠습니까?');
        setIsOpenSubmitModal(true);
        document.body.style.overflow = 'unset'; // 저정하고 스크롤 방지 해제
      }
    } else {
      setErrorMessage('저장하시겠습니까?');
      setIsOpenSubmitModal(true);
      document.body.style.overflow = 'unset'; // 저정하고 스크롤 방지 해제
    }
  };

  const handleSubmit = async () => {
    const submitData = {
      book_Title: selectedData.title,
      book_Author: selectedData.author,
      book_Thumbnail: selectedData.image,
      book_Publisher: selectedData.publisher,
      sentence: inputSentence,
      comment: inputComment
    };

    if (selectedData.title === '' || (inputSentence === '' && inputSentence === '')) {
      setErrorMessage('내용을 입력하세요.');
      setIsOpenNoticeModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      await axios({
        withCredentials: true,
        method: 'post',
        url: `http://server.bookdam.link/article/${userInfo.id}`,
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
            history.push('/myPage');
          } else {

          }
        })
        .catch(err => {

        });
    }
  };

  return (
    <>
      <WriteWholeContainer>
        {isOpenLoginModal
          ? <GuestLoginModal
              setIsOpenLoginModal={setIsOpenLoginModal}
              handleSignupModal={handleSignupModal}
            />
          : null}

        {isOpenSignupModal
          ? <SignupModal
              handleCloseSignupModal={handleCloseSignupModal}
              handleLoginModal={handleLoginModal}
            />
          : null}

        {isOpenBookSearchModal
          ? <BookSearchModal
              handleSelect={handleSelect}
              searchData={searchData}
              setSearchData={setSearchData}
              isLoading={isLoading}
              setIsOpenBookSearchModal={setIsOpenBookSearchModal}
            />
          : null}

        {isOpenNoticeModal
          ? <NoInputNoticeModal errorMessage={errorMessage} handleCloseNoticeModal={handleCloseNoticeModal} />
          : null}

        {isOpenSubmitModal
          ? <SubmitConfirmModal errorMessage={errorMessage} handleSubmit={handleSubmit} handleCloseNoticeModal={handleCloseNoticeModal} />
          : null}

        {isOpenTextLimitNoticeModal
          ? <TextLimitNoticeModal errorMessage={errorMessage} handleCloseNoticeModal={handleCloseNoticeModal} />
          : null}
        <SearchBookWrapper>
          <SearchBookContainer>
            <SearchBookInfoContainer>
              <SearchBookInfoUpper>
                <SearchContainer>
                  <SearchInputcontainer onKeyPress={onKeyPress} value={inputValue} onChange={handleInputValue} />
                  <SearchClick onClick={bookSearch}>검색</SearchClick>
                </SearchContainer>
              </SearchBookInfoUpper>
              <SearchBookInfoLower>
                <SearchBookTitleContainer>
                  <BookTitleLeftContainer>도서명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{selectedData.title}</BookTitleRightContainer>
                </SearchBookTitleContainer>
                <SearchBookAuthorContainer>
                  <BookTitleLeftContainer>저자명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{selectedData.author}</BookTitleRightContainer>
                </SearchBookAuthorContainer>
                <SearchBookPublisherContainer>
                  <BookTitleLeftContainer>출판사</BookTitleLeftContainer>
                  <BookTitleRightContainer>{selectedData.publisher}</BookTitleRightContainer>
                </SearchBookPublisherContainer>
              </SearchBookInfoLower>
            </SearchBookInfoContainer>
            <SearchBookImageContainer>
              <BookThumbnailContainer>
                {selectedData.image
                  ? <BookThumbnail src={selectedData.image} />
                  : null}
              </BookThumbnailContainer>
            </SearchBookImageContainer>
          </SearchBookContainer>
        </SearchBookWrapper>

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
                <ButtonsInWrite onClick={submitHandler}>저장하기</ButtonsInWrite>
              </ButtonContainer>
            </ArticleButtonSection>
          </ArticleButtonContainer>
        </ArticleButtonWrapper>
      </WriteWholeContainer>
    </>
  );
};
