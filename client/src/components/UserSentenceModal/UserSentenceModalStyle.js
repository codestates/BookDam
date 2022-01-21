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
  background: #fff;

  /* position: relative; */
  /* flex-wrap: wrap; */
  /* border: 10px solid black; */
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
  /* border: 1px solid; */
  box-shadow:   
  rgba(0, 0, 0, 0.17) 0px -3px 15px 0px inset;
  /* background-image: linear-gradient(rgba(0,170, 0, 0.1), rgba(0, 255, 0, 0.5)); */

  @media (max-width: 500px){
    height: 630px;
    width: 80%;
    min-width: 350px;
  }
  `;

export const UserInfo = styled.div`
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
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
width: 95%;
border-radius: 15px;
overflow: auto;
margin: 0px;
background-color: whitesmoke;
background-size: contain;
font-size: 20px;
font-weight: 500;
@media (max-width: 500px) {
  font-weight: 500;
  font-size: 20px;
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
width: 95%;
margin-top: 15px;
border-radius: 15px;
background-color: whitesmoke;
overflow: auto;
line-height: 40px;
font-size: 16px;
@media (max-width: 500px) {
  font-size: 15px;
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
  /* border: 1px solid black; */
`;

export const BookTitle = styled.div`
  font-size: 14px;
  width: 350px;
  padding: 0;
  margin: 0;
  margin-left: 7px;
  /* border: 1px solid black; */

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
  /* border: 1px solid black; */

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
  /* border: 1px solid blue; */
`;

export const CloseBtn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid #12e272;
  border-radius: 5px;
  background-color: #12e272;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  padding: 9px 12px;
  border-radius: 2px;
`;

export const CloseBtn2 = styled.button`
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 44px;
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
  width: 100%;
  z-index: 9;
  border: 0;

  &:hover {
  background: #00bd68;
  }
`;
