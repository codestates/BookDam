import styled from 'styled-components';
import logo from '../../assets/images/logo-bigw.png';

export const FooterWholeContainer = styled.div`
  /* border: 10px solid red; */
  overflow: hidden;
  height: 180px;
  width: 100vw;

  @media screen and (max-width: 500px) {
    height: 120px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  width: 100%;
  /* border: 10px solid red; */
  background-color: black;
  @media screen and (max-width:500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
    width: 100%;
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* border: 1px solid blue; */
  justify-content: space-around;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const FooterLogo = styled.img.attrs({
  src: logo,
  alt: '로고'
})`
  height: 100px;
  width: 150px;
  margin-top: 20px;
    @media (max-width:500px) {
      height: 50px;
      width: 70px;
    }
`;
export const FooterContent = styled.ul`
  color: #E6E6E6;
  text-align: center;
  list-style-type: none;
  > li  {
    text-decoration: none;
    color: #E6E6E6;
    > a {
      text-decoration: none;
      color: #E6E6E6;
  }}
  @media (max-width:500px) {
    font-size: 9px;
  }
`;
export const FooterCopyright = styled.div`
  color: #E6E6E6;
  text-align: center;
    @media (max-width:500px) {
      font-size: 12px;
    }
`;
export const FooterTitle = styled.h3`
  font-weight: 900;
  font-family: 'Bebas Neue';
  margin-top: 0px;
  margin-bottom: 10px;
  @media (max-width:500px) {
    font-size: 9px;
  }
`;
