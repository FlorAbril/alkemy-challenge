import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeroesProvider from './store/HeroesProvider';

ReactDOM.render(
  <React.StrictMode>
    <HeroesProvider>
    <App />
    </HeroesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
