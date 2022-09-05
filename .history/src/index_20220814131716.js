import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Context from './components/context/Context';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
// axios.defaults.baseURL = 'https://guarded-beach-16980.herokuapp.com/api/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Context>
      <App />
    </Context>
  {/* <App/> */}
  // </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

