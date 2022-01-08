import React, { useState, useEffect } from 'react';
import {
  BookSearchModalWholeBackground,
  BookSearchModalWrapper,
  BookListModalContainer,
  BookSearchCloseButton
} from './BookSearchModalStyle';
import { BookList } from './BookList';

export const BookSearchModal = ({ handleSelect,setIsOpenBookSearchModal, searchData }) => {

  const handleCloseBookSearchModal = () => {
    setIsOpenBookSearchModal(false);
    document.body.style.overflow = 'unset'; // 스크롤 방지 해제
  };

  return (
    <div>
      <BookSearchModalWholeBackground onClick={handleCloseBookSearchModal}>
        <BookSearchModalWrapper>
          <BookSearchCloseButton onClick={handleCloseBookSearchModal}>&times;</BookSearchCloseButton>
          <BookListModalContainer>
            {searchData.map((el, idx) => <BookList list={el} key={el.isbn} idx={idx} handleDelete={handleSelect}/>)}
          </BookListModalContainer>
        </BookSearchModalWrapper>
      </BookSearchModalWholeBackground>
    </div>
  );
};
