import styled from 'styled-components';
import background from '../../assets/images/backimg2.png';
import { FaUserPlus, FaUserAltSlash, FaUserCheck } from 'react-icons/fa';

export const FeedContentContainer = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0%;
list-style-type: none;
/* position: relative; */
/* flex-wrap: wrap; */
/* border: 10px solid black; */
width: 100vw;
`;

export const UserInfoContainer = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
border: 1px solid black;
height: 930px;
width: 640px;
background-image: linear-gradient(rgba(0,170, 0, 0.1), rgba(0, 255, 0, 0.5));
@media (max-width: 500px){
  height: 630px;
  width: 370px;
}
`;
export const UserInfo = styled.div`
width: 90%;
margin: 15px;
display: flex;
justify-content: space-between;
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
export const DefaultUserImage = styled.img`
height: 100%;
width: 100%;
`;
export const UserNameAndImage = styled.div`
width: 50%;
display:flex;
flex-direction: row;
justify-content: left;
align-items: center;

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
export const UserFollowIcon = styled.button.attrs({

})`
font-weight: 900;
height: 20px;
width: 60px;
margin-left: 15px;
border: 0;
border-radius: 2px;
background-color: rgba(120,250, 100);
transition: all 0.1s ease-out;
cursor: pointer;
> svg {
  margin-top: 2px;
}
:hover {
  font-size:15px;
  content: "팔로우 취소"
}
@media screen and (max-width: 500px) {
width: 40px;
}
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
background-image: url(${background});
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
