import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardList from './components/CardList/CardLlist.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList name="Noval Christian" nim="21120118130060" kelompok="48" isNameBold />
  </React.StrictMode>,
  document.getElementById('root')
);

