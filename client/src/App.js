import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IntroWrapper from './components/Intro/IntroWrapper';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage/MyPage';

function App () {
  return (
    <>
      <IntroWrapper />
      <Navbar />
      <MyPage />
      <Footer />

    </>
  );
}

export default App;
