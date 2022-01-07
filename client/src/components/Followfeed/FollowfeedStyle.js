import styled from 'styled-components';
import background from "../../assets/images/backimg2.png"
import { FaUserPlus, FaUserAltSlash, FaUserCheck } from 'react-icons/fa';

export const FeedContentContainer = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0%;
list-style-type: none;

/* flex-wrap: wrap; */
`;

export const UserInfoContainer = styled.li`
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
margin: 15px;
display: flex;
justify-content: space-between;
`;
export const UserImageContainer = styled.div`
height: 50px;
width: 50px;
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
`;
export const UserFollowIcon = styled.button`
height: 20px;
width: 60px;
margin-left: 15px;
border: 0;
border-radius: 2px;
background-color: #5dc175;
transition: all 0.2s ease-out;
cursor: pointer;
:hover {
  background-color: #c4ffd6;

}`;
export const PostCreatedAt = styled.div`
margin-right: 10px;
font-size: 20px;
color: grey;
display: flex;
justify-content: center;
align-items: center;
`;
export const ContentsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 90%;
width: 95%;
margin-left: 15px;
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
font-size: 20px;
padding: 3px;
margin-top: 10px;
`;
