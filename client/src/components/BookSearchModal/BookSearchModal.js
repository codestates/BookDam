import React, { useState, useEffect } from 'react';
import {
  BookSearchModalWholeBackground,
  BookSearchModalWrapper,
  BookListModalContainer,
  NoBookListDisplay,
  BookSearchCloseButton
} from './BookSearchModalStyle';
import { BookList } from './BookList';

export const BookSearchModal = ({ handleSelect, setIsOpenBookSearchModal, searchData }) => {
  const handleCloseBookSearchModal = () => {
    setIsOpenBookSearchModal(false);
    document.body.style.overflow = 'unset'; // 스크롤 방지 해제
  };

  return (
    <div>
      <BookSearchModalWholeBackground onClick={handleCloseBookSearchModal}>
        <BookSearchModalWrapper onClick={(e) => e.stopPropagation()}>
          <div>
            <BookSearchCloseButton onClick={handleCloseBookSearchModal}>&times;</BookSearchCloseButton>
          </div>
          <BookListModalContainer>
            {searchData.length !== 0
              ? searchData.map((el, idx) => <BookList list={el} key={el.isbn} idx={idx} handleDelete={handleSelect} />)
              : <NoBookListDisplay>검색 결과가 없습니다.</NoBookListDisplay>}
          </BookListModalContainer>
        </BookSearchModalWrapper>
      </BookSearchModalWholeBackground>
    </div>
  );
};
