import React, { useState, useEffect } from 'react';
import {
  BookSearchModalWholeBackground,
  BookSearchModalWrapper,
  BookListModalContainer,
  BookSearchModalHeader,
  BookSearchModalLeft,
  NoBookListDisplay,
  BookSearchCloseButton
} from './BookSearchModalStyle';
import { BookList } from './BookList';

export const BookSearchModal = ({ isLoading, handleSelect, setIsOpenBookSearchModal, searchData, setSearchData }) => {
  const handleCloseBookSearchModal = () => {
    setIsOpenBookSearchModal(false);
    setSearchData([]);
    document.body.style.overflow = 'unset'; // 스크롤 방지 해제
  };

  return (
    <div>
      <BookSearchModalWholeBackground onClick={handleCloseBookSearchModal}>
        <BookSearchModalWrapper onClick={(e) => e.stopPropagation()}>
          <BookSearchModalHeader>
            <BookSearchModalLeft />
            <BookSearchCloseButton onClick={handleCloseBookSearchModal}>&times;</BookSearchCloseButton>
          </BookSearchModalHeader>
          <BookListModalContainer>
            {searchData.length !== 0
              ? searchData.map((el, idx) => <BookList list={el} key={el.itemId} idx={idx} handleDelete={handleSelect} />)
              : isLoading
                ? <NoBookListDisplay>데이터를 불러오고 있습니다.</NoBookListDisplay>
                : <NoBookListDisplay>검색결과가 없습니다.</NoBookListDisplay>}
          </BookListModalContainer>
        </BookSearchModalWrapper>
      </BookSearchModalWholeBackground>
    </div>
  );
};
