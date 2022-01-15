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

  @media screen and (max-width: 500px) {
    background: white;
  }
`;

// 모달: UserModify 모달창
export const UserImgSelectContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 450px;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
`;