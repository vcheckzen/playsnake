import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'types';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
