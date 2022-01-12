import styled from 'styled-components';

// 모달: 전체 배경
export const BookSearchModalWholeBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과

  @media screen and (max-width: 500px) {
    /* background: white; */
    display: hidden;
  }
`;

export const BookSearchModalWrapper = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  box-sizing: border-box;
  margin: 150px auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  /* border: 1px solid black; */

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    background-color: white;
    margin: 0;
    border-radius: 0;
  }
`;

export const BookListModalContainer = styled.div`
 margin-top: 10px;
 /* border: 1px solid black; */
 overflow-y: scroll;
 height: 85%;
 padding-left: 15px;
 cursor: pointer;
`;

export const BookSearchModalHeader = styled.div`
 display: flex;
 flex-direction: row;
 /* border: 1px solid black; */
`;

export const BookSearchModalLeft = styled.div`
  width: 96%;
  /* border: 1px solid black; */
`;

export const NoBookListDisplay = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// BookSearch: 닫기
export const BookSearchCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 8px;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
