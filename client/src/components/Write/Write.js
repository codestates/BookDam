import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../dummyfiles/dummyBookSearch';
import walden from '../../assets/images/walden_thumbnail.jpeg';
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
  SearchBookAuthorContainer,
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
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const bookSearch = () => {
    const resultData = data.filter((el) => {
      return el.title.includes(inputValue);
    });
    console.log(resultData);
  };

  return (
    <WriteWholeContainer>
      <SearchBookWrapper>
        <SearchBookContainer>
          <SearchBookInfoContainer>
            <SearchBookInfoUpper>
              <SearchContainer>
                <SearchInputcontainer onChange={handleInputValue} />
                <SearchClick onClick={bookSearch}>검색</SearchClick>
              </SearchContainer>
            </SearchBookInfoUpper>
            <SearchBookInfoLower>
              <SearchBookTitleContainer />
              <SearchBookAuthorContainer />
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
          <WriteSentenceSection />
          <WriteCommentSection />
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
