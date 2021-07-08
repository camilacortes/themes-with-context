import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import themeContext from './themeContext.js'

ReactDOM.render(
  <div className="container">
  <themeContext.Provider value={'dark'}>
  <App/>
  </themeContext.Provider>
  </div>,
  document.getElementById('root')
);
