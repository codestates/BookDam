import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IntroWrapper from './components/Intro/IntroWrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyPage from '../src/pages/MyPage/MyPage';

function App () {
  return (
    <>
      {/* <Header /> */}
      <MyPage />
      {/* <Footer /> */}
    </>
  );
}

export default App;
