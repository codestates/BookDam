import styled from 'styled-components';

// 모달: 전체 배경, background
export const UserImgSelectModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 999;

  @media screen and (max-width: 500px) {
    background: white;
  }
`;

// 모달: UserModify 모달창
export const UserImgSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 25rem;
  height: 800px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 999;
`;

export const UserImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 5px;
  
  &:hover {
    border: 5px solid black;
  }
`;
