import styled from 'styled-components';

// 모달: 전체 배경, background
export const SentenceModalBackContainer = styled.div`
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

//
export const SentenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0%;
  width: 100vw;
  
`;

export const UserInfoContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 640px;
  height: 640px;
  padding: 16px;
  background: white;
  border-radius: 15px;
  text-align: center;
  box-shadow:   
  rgba(0, 0, 0, 0.17) 0px -3px 15px 0px inset;

  @media (max-width: 500px){
    height: 630px;
    width: 80%;
    min-width: 350px;
  }
  `;

// 삭제, 편집 버튼
export const EditWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.3);
  > div {
    cursor: pointer;
    margin: 5px 5px 0 0;
  }
`;

// Edit buttion 클릭 시 나오는 메뉴
export const EditMenuWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  margin: 0 50px 0 0;
  top: 8%; 
  height: 50px;
  text-align: center;
  font-size: 13px;
  z-index: 101;
`;

export const Edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 50%;
  background-color: honeydew;
  margin: 0;
  padding: 0 .3em;
  transition: all .3s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2ecc71;
  }

  @media (max-width: 500px){
    cursor: none;
  }
`;

export const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 50%;
  background-color: honeydew;
  margin: 0;
  padding: 0 .3em;
  transition: all .3s;
  color: red;
  cursor: pointer;
  
  &:hover {
    color: red;
    background-color: #ffc9c9;
  }

  @media (max-width: 500px){
    cursor: none;
  }
`;

export const UserInfo = styled.div`
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  `;

export const UserNameAndImage = styled.div`
  width: 50%;
  display:flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const UserImageContainer = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 40px;
  }
`;

export const UserImage = styled.img`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const UserNickName = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  left: 10px;
  margin-left: 20px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  
  @media screen and (max-width: 500px) {
    font-size: 19px;
  }
`;
export const DefaultUserImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const PostCreatedAt = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
  font-size: 9px;
  }
`;

export const ContentsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 90%;
width: 95%;
`;

export const Sentence = styled.div`
display: flex;
padding: 10px;
justify-content: center;
align-items: center;
text-align: center;
line-height: 35px;
height: 60%;
max-height: 300px;
width: 95%;
border-radius: 15px;
overflow: auto;
margin: 0px;
background-color: whitesmoke;
background-size: contain;
font-size: 40px;
font-family: 'Dongle', sans-serif;

  @media (max-width: 500px) {
    font-weight: 500;
    font-size: 40px;
    width: 90%;
  }
`;

export const Comment = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
text-align: center;
height: 20%;
max-height: 100px;
width: 95%;
margin-top: 15px;
border-radius: 15px;
overflow: auto;
background-color: whitesmoke;
font-size: 40px;
font-family: 'Dongle', sans-serif;
line-height: 40px;

@media (max-width: 500px) {
  font-size: 30px;
  line-height: 30px;
  width: 90%;
}
`;

// 책 이름, 저자 wrap
export const BookInfoWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  margin: 0;
  padding-left: 10px;
  text-align: start;
  font-weight: 500;
  color: grey;
`;

export const BookTitle = styled.div`
  font-size: 14px;
  width: 350px;
  padding: 0;
  margin: 0;
  margin-left: 7px;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const BookAuthor = styled.div`
  font-size: 14px;
  width: 330px;
  padding: 0;
  margin: 0;
  margin-left: 15px;

  @media screen and (max-width: 500px) {
    font-size: 10px
  }
`;

// 닫기 버튼
export const CloseBtnWrap = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 90px;
  
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CloseBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #1dc078;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  border: 0;
  margin: 10px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 5px;
`;
