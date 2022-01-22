import React from 'react';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer } from './HeaderStyle';

export default function Header () {
  return (
    <>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
    </>
  );
}
