import React, { useState } from 'react';
import {
  UserImgSelectModalContainer,
  UserImgSelectContainer

} from './UserImageSelectModalStyle';

export const UserImageSelectModal = () => {
  return (
    <>
      <UserImgSelectModalContainer>
        <UserImgSelectContainer />
      </UserImgSelectModalContainer>
    </>
  );
};
