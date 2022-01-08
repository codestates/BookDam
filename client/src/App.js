import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import Header from './components/Header/Header';
import Footer from '../src/components/Footer/Footer';

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IntroPage />
          <Footer />
        </Route>
        <Header />
      </Switch>
    </>
  );
}

export default App;
