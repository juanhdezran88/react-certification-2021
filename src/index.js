import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './global';
import GlobalProvider from './providers/Global/Global.provider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);
