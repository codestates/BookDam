import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../dummyfiles/dummyBookSearch'; // 도서검색 테스트 위한 더미 데이터
import { useSelector } from 'react-redux';
import { BookSearchModal } from '../BookSearchModal/BookSearchModal';
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

export const Edit = ({ articleInfo }) => {
  const location = useLocation();
  const articles = location.state.articles; // MyPage 썸네일을 눌러서 넘어오는 articles 정보
  console.log(articles);
  const state = useSelector(state => state.userInfoReducer);
  const { userInfo } = state; // 전역저장소에서 userInfo를 불러온다.
  const user_Id = userInfo.user_Id; // 현재 로그인한 사용자 정보
  // const { article_Id, sentence, comment } = articleInfo;

  const [isOpenBookSearchModal, setIsOpenBookSearchModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    title: '', author: '', publisher: '', image: ''
  });
  const [inputSentence, setInputSentence] = useState('');
  const [inputComment, setInputComment] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const bookSearch = () => { // 도서 검색 버튼
    if (inputValue) {
      setIsOpenBookSearchModal(true);
      document.body.style.overflow = 'hidden'; // 스크롤 방지 설정
      const resultData = data.filter((el) => {
        return el.title.includes(inputValue);
      });
      setSearchData(resultData);
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
  };

  const handleInputSentence = (e) => {
    setInputSentence(e.target.value);
  };

  const handleInputComment = (e) => {
    setInputComment(e.target.value);
  };

  return (
    <>
      <EditWholeContainer>
        {isOpenBookSearchModal
          ? <BookSearchModal
              handleSelect={handleSelect}
              searchData={searchData}
              setIsOpenBookSearchModal={setIsOpenBookSearchModal}
            />
          : null}
        <EditPageWrapper>
          <BookContainer>
            <BookInfoContainer>
              <SearchBookInfoUpper>
                <SearchContainer>
                  <SearchInputcontainer value={inputValue} onChange={handleInputValue} />
                  <SearchClick onClick={bookSearch}>검색</SearchClick>
                </SearchContainer>
              </SearchBookInfoUpper>
              <SearchBookInfoLower>
                <SearchBookTitleContainer>
                  <BookTitleLeftContainer>도서명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{articles.book_Title}</BookTitleRightContainer>
                </SearchBookTitleContainer>
                <BookAuthorContainer>
                  <BookTitleLeftContainer>저자명</BookTitleLeftContainer>
                  <BookTitleRightContainer>{articles.book_Author}</BookTitleRightContainer>
                </BookAuthorContainer>
                <BookPublisherContainer>
                  <BookTitleLeftContainer>출판사</BookTitleLeftContainer>
                  <BookTitleRightContainer>{articles.book_Publisher}</BookTitleRightContainer>
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
            <WriteSentenceSection onChange={handleInputSentence} />
            <WriteCommentSection onChange={handleInputComment} />
          </WriteArticleContainer>
        </WriteArticleWrapper>

        <ArticleButtonWrapper>
          <ArticleButtonContainer>
            <ArticleButtonSection>
              <ButtonContainer>
                <ButtonsInEdit>작성하기</ButtonsInEdit>
              </ButtonContainer>
            </ArticleButtonSection>
          </ArticleButtonContainer>
        </ArticleButtonWrapper>
      </EditWholeContainer>
    </>
  );
};
