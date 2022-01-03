import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IntroWrapper from './components/Intro/IntroWrapper';
import Header from './components/Header/Header';

function App () {
  return (
    <>
      <IntroWrapper />
      <Header />  
    </>
  );
}

export default App;
