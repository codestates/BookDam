import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux'; // 로그인 상태변경용
import { GuestLoginAction, LoginAction } from './actions/UserInfoAction';
import { Section2 } from './components/Landing/Section2/Section2';
import { Section3 } from './components/Landing/Section3/Section3';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('logged'));
    if (userInfo && userInfo.userId !== 'guest') {
      dispatch(LoginAction(userInfo));
    } else if (userInfo && userInfo.userId === 'guest') {
      dispatch(GuestLoginAction(userInfo));
    }
  });

  return (
    <>

      <Switch>
        <Header />
        <Route exact path='/'>
          <IntroPage />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
