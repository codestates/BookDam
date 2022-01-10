import React from 'react';
import {
  BookSearchModalContainer,
  BookImageContainer,
  BookThumbnailContainer,
  BookInfoContainer,
  BookTitleContainer,
  BookAuthorContainer,
  BookPublisherContainer

} from './BookListStyle';

export const BookList = ({ handleDelete, list, idx }) => {
  return (
    <>
      <BookSearchModalContainer onClick={() => handleDelete(idx)}>
        <BookImageContainer>
          <BookThumbnailContainer src={list.image} />
        </BookImageContainer>
        <BookInfoContainer>
          <BookTitleContainer>{list.title}</BookTitleContainer>
          <BookAuthorContainer>{list.author}</BookAuthorContainer>
          <BookPublisherContainer>{list.publisher}</BookPublisherContainer>
        </BookInfoContainer>
      </BookSearchModalContainer>
    </>
  );
};
