import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IntroWrapper from './components/Intro/IntroWrapper';
import Header from './components/Header/Header';
import { FeedPage } from './pages/FeedPage/FeedPage';
function App () {
  return (
    <>
      <FeedPage />
    </>
  );
}

export default App;
