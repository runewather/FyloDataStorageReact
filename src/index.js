import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="public/favicon-32x32.png" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);