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
  height: 500px;
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
`;

export const UserImgSection = styled.div`
  width: 90px;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
`;

// 사진 변경 버튼
export const EditPictureWrap = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 20px 5px 0;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const EditPictureBtn = styled.button`
  background-color: white;
  box-sizing: border-box;
  border: 2px solid #12e272;
  border-radius: 5px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-size: 6px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.5;
  padding: 3px;
  position: relative;
  text-align: center;
  white-space: nowrap;
`;

export const UserNickName = styled.div`
  display: flex;
  font-size: 1.1rem;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-left: 5px;
`;

export const UserInfoEditSection = styled.div`
  margin: 0;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
`;

export const NickNameInput = styled.input.attrs({
  placeholder: 'NickName',
  type: 'text'
})`
  margin: 10px 0 0 10px;
  border-radius: 2px;
  width: 170px;
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
  margin: 10px 0 0 10px;
  border-radius: 2px;
  width: 170px;
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
  margin: 10px 0 0 10px;
  border-radius: 2px;
  width: 170px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

export const UserInfoModifyBtnSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  margin: 0;
`;

// 사진/닉네임 변경 버튼
export const ModificationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 10px 0 0 25px;
  padding: 9px 12px;
  width: 170px;
  height: 40px;
  background-color: #1dc078;
  color: white;
  cursor: pointer;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
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
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  
  &:hover {
  background: #00bd68;
  }
`;

// 비밀번호 변경 버튼
export const ModifyPasswordBtn = styled.button`
  width: 260px;
  height: 40px;
  background-color: #1dc078;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
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
  font-size: 14px;
  border-radius: 5px;
  
  &:hover {
  background: #00bd68;
  }
`;

export const SignOutBtn = styled.button`
  display: flex;
  width: 260px;
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
  font-weight: 600;
`;
