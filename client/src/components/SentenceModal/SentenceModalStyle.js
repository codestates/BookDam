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
  height: 70%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  background-image: linear-gradient(rgba(0,170, 0, 0.1), rgba(0, 255, 0, 0.5));

  @media (max-width: 500px){
    height: 630px;
    width: 370px;
  }
  `;

// 삭제, 편집 버튼
export const EditWrap = styled.div`
  justify-content: flex-end;
  padding: 0;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  > div {
    cursor: pointer;
  }
`;



export const UserInfo = styled.div`
  width: 90%;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
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
font-size: 30px;
font-weight: 800;
@media (max-width: 500px) {
  font-weight: 700;
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
font-size: 20px;
@media (max-width: 500px) {
  font-size: 20px;
  width: 90%;
}
`;

export const BookInfo = styled.div`
width: 100%;
font-size: 20px;
padding: 3px;
margin-top: 10px;
margin-left: 15px;
@media screen and (max-width: 500px) {
  font-size: 8px
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