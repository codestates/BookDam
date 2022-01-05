import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IntroWrapper from './components/Intro/IntroWrapper';
import Footer from './components/Footer/Footer';
import { Feed } from './components/Feed/Feed';
import MyPage from './components/Mypage/Mypage'

function App () {
  return (
    <>
    <IntroWrapper></IntroWrapper>
      <Footer/>
    </>
  );
}

export default App;
