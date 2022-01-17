import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterInfo,
  FooterLogo,
  FooterContent,
  FooterTitle,
  FooterCopyright
} from './FooterStyle';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { BiCommentError } from 'react-icons/bi';

export default function Footer () {
  return (
    <>
      <FooterContainer>
        <FooterInfo>
          <Link to='/'>
            <FooterLogo />
          </Link>
          <FooterContent>
            <FooterTitle>ABOUT US</FooterTitle>
            <br />
            <li>
              <a href='https://github.com/codestates/BookDam/' target='_blank' rel='noreferrer'>
                Github
              </a>
            </li>
            <li>
              <a href='https://github.com/codestates/BookDam/wiki' target='_blank' rel='noreferrer'>
                Wiki
              </a>
            </li>

          </FooterContent>
          <FooterContent>
            <FooterTitle>TEAM</FooterTitle>
            <li>
              <a href='https://github.com/sangkwonkim' target='_blank' rel='noreferrer'>
                <AiFillGithub /> 김상권
              </a>
            </li>
            <li>
              <a href='https://github.com/holystorySeo' target='_blank' rel='noreferrer'>
                <AiFillGithub /> 서한석
              </a>
            </li>
            <li>
              <a href='https://github.com/hellohyonee' target='_blank' rel='noreferrer'>
                <AiFillGithub /> 신현경
              </a>
            </li>
            <li>
              <a href='https://github.com/Seunghoya' target='_blank' rel='noreferrer'>
                <AiFillGithub /> 안승호
              </a>
            </li>
          </FooterContent>
          <FooterContent>
            <FooterTitle>REPORT</FooterTitle>
            <br />
            <li>
              <a href='https://docs.google.com/forms/d/1iaCTipqHapadjwVuurusJScLOnKMSQtQvDqSOma5K4c/viewform?edit_requested=true' target='_blank' rel='noreferrer'>
                <BiCommentError /> 제보하기
              </a>
            </li>
            <li>
              <a href='mailto:official.bookdam@gmail.com'>
                <HiOutlineMail /> 이메일 문의
              </a>
            </li>
          </FooterContent>
        </FooterInfo>
        <FooterCopyright>© Copyright 2022 SecondWind Inc. All rights reserved.</FooterCopyright>
      </FooterContainer>
    </>
  );
}
