import React, { useState } from 'react';
import { data } from '../../dummyfiles/dummyBookSearch';
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
  SearchBookImageContainer,
  WriteArticleWrapper,
  WriteArticleContainer,
  ArticleButtonWrapper,
  ArticleButtonContainer
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
            <SearchBookInfoLower />
          </SearchBookInfoContainer>
          <SearchBookImageContainer />
        </SearchBookContainer>
      </SearchBookWrapper>

      <WriteArticleWrapper>
        <WriteArticleContainer />
      </WriteArticleWrapper>

      <ArticleButtonWrapper>
        <ArticleButtonContainer />
      </ArticleButtonWrapper>
    </WriteWholeContainer>
  );
};
