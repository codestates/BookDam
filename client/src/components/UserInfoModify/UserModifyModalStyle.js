import styled from 'styled-components';

// 모달: 전체 배경, background
export const UserInfoModifyModalContainer = styled.div`
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
export const UserInfoModifyContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 80%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
`;

export const ModifyCloseSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 3px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.3);
  > div {
    cursor: pointer;
  }
`;

export const UserInfoSection = styled.div`
  display: flex;
  height: 90px;
  margin: 10px;
  /* border: 1px solid blue; */
`;

export const UserImgSection = styled.div`
  width: 90px;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid black;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserNickName = styled.div`
  display: flex;
  font-size: 1.1rem;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-left: 5px;
  /* border: 1px solid green; */
`;

export const UserInfoEditSection = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid skyblue; */
`;

export const NickNameInput = styled.input.attrs({
  placeholder: 'NickName',
  type: 'text'
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;

`;

export const PasswordInput = styled.input.attrs({
  placeholder: 'Password',
  type: 'password'
})`
  position: sticky;
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

export const PasswordChkInput = styled.input.attrs({
  placeholder: 'Password Check',
  type: 'password'
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.div`

`;

export const UserInfoModifyBtnSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-top: 20px;
  /* border: 1px solid blue; */
`;

export const ModificationBtn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid #12e272;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: #12e272;
  font-weight: 500;
  margin: 10px;
  padding: 9px 12px;
  border-radius: 2px;
`;

export const SignOutBtn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: rgba(0, 0, 0, 0.4);
  margin: 10px;
  padding: 9px 12px;
  border-radius: 2px;
`;
