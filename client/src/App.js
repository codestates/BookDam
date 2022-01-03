import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IntroWrapper from './components/Intro/IntroWrapper';

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <IntroWrapper />
          <section>
            <Switch>
              <Route exact path='/feedpage'>
              </Route>
              <Route exact path='/login'>
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
