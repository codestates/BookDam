import styled from 'styled-components';

// 모달: BookSearch 결과 리스트 컨테이너
export const BookSearchModalContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  height: 33%;

  &:hover {
    background-color: rgb(229, 229, 229);
  }
`;

export const BookImageContainer = styled.div`
 /* border: 1px solid black; */
  width: 45%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;

  /* @media screen and (max-width: 500px) {
    width: 250px;
    height: 200px; 
  }*/
`;

export const BookThumbnailContainer = styled.img`
 border: 1px solid black; //필수
 width: 120px;
 height: 155px;
`;

export const BookInfoContainer = styled.div`
 /* border: 1px solid black; */
 width: 55%;
 display: flex;
 flex-direction: column;
 padding-top: 10px;
 padding-left: 10px;
 padding-bottom: 10px;
 padding-right: 15px;
`;

export const BookTitleContainer = styled.div`
  width: 100%;
  height: 50%;
  /* border: 1px solid black; */
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
   height: 30%;
 }
`;

export const BookAuthorContainer = styled.div`
  width: 100%;
  height: 25%;
  /* border: 1px solid black; */
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  
`;

export const BookPublisherContainer = styled.div`
  width: 100%;
  height: 25%;
  /* border: 1px solid black; */
  display: flex;
  align-items: flex-start;
  font-size: 15px;
`;
