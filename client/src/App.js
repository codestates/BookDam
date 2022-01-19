import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux'; // 로그인 상태변경용
import { GuestLoginAction, LoginAction } from './actions/UserInfoAction';
import { Section3 } from './components/Lading/Section3/Section3';

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
        <Route exact path='/'>
          <IntroPage />
          <Footer />
          {/* <Section3 /> */}
        </Route>
        <Header />
      </Switch>
    </>
  );
}

export default App;
