import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../src/style/theme';
import store from './store/store';
import { Provider } from 'react-redux';
import ScrollTop from './components/ScrollTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollTop />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
