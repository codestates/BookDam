import React, { useState } from 'react';
import { data } from '../../dummyfiles/dummyBookSearch'; // 도서검색 테스트 위한 더미 데이터
import walden from '../../assets/images/walden_thumbnail.jpeg';
import { BookSearchModal } from '../BookSearchModal/BookSearchModal';
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
  WriteCommentSection,
  ArticleButtonWrapper,
  ArticleButtonContainer,
  ArticleButtonSection,
  ButtonContainer,
  ButtonsInWrite
} from './WriteStyle';

export const Write = () => {
  const [isOpenBookSearchModal, setIsOpenBookSearchModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    title: '', author: '', publisher: '', image: ''
  })
  const [inputSentence, setInputSentence] = useState('');
  const [inputComment, setInputComment] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const bookSearch = () => { //도서 검색 버튼
    if(inputValue) {
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

  const handleSelect = (idx) => { //검색된 도서 선택하여 가져오기
    setInputValue('');
    // eslint-disable-next-line array-callback-return
    searchData.map((el, id) => {
      if(id === idx) {
        setSelectedData(el);
      }
    });
  };

  const handleInputSentence = (e) => {
    setInputSentence(e.target.value);
  }

  const handleInputComment = (e) => {
    setInputComment(e.target.value);
  }

  const handleSubmit = () => {
    const submitData = {
      title: selectedData.title,
      author: selectedData.author,
      sentence: inputSentence,
      comment: inputComment
    }
    //axios.post

  }

  return (
    <WriteWholeContainer>
      {isOpenBookSearchModal
        ? <BookSearchModal handleSelect={handleSelect} 
           searchData={searchData} 
           setIsOpenBookSearchModal={setIsOpenBookSearchModal} />
        : null}
      <SearchBookWrapper>
        <SearchBookContainer>
          <SearchBookInfoContainer>
            <SearchBookInfoUpper>
              <SearchContainer>
                <SearchInputcontainer value={inputValue} onChange={handleInputValue} />
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
              <BookThumbnail src={walden} />
            </BookThumbnailContainer>
          </SearchBookImageContainer>
        </SearchBookContainer>
      </SearchBookWrapper>

      <WriteArticleWrapper>
        <WriteArticleContainer>
          <WriteSentenceSection onChange={handleInputSentence}/>
          <WriteCommentSection onChange={handleInputComment}/>
        </WriteArticleContainer>
      </WriteArticleWrapper>

      <ArticleButtonWrapper>
        <ArticleButtonContainer>
          <ArticleButtonSection>
            <ButtonContainer>
              <ButtonsInWrite>작성하기</ButtonsInWrite>
            </ButtonContainer>
          </ArticleButtonSection>
        </ArticleButtonContainer>
      </ArticleButtonWrapper>
    </WriteWholeContainer>
  );
};
